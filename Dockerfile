ARG BUILDER_IMAGE="node:lts-alpine"
ARG RUNNER_IMAGE="nginx:stable-alpine"

# build stage
FROM ${BUILDER_IMAGE} AS build-stage

ARG API_PROTO
ARG API_HOST
ARG API_PORT
ARG CONTRACT_ADDR

WORKDIR /app
COPY package*.json ./
RUN npm install

ENV API_PROTO=${API_PROTO}
ENV API_HOST=${API_HOST}
ENV API_PORT=${API_PORT}
ENV CONTRACT_ADDR=${CONTRACT_ADDR}

COPY . .
RUN npm run build

# production stage
FROM ${RUNNER_IMAGE} AS production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]