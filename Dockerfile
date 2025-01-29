ARG BUILDER_IMAGE="node:lts-alpine"
ARG RUNNER_IMAGE="nginx:stable-alpine"

# build stage
FROM ${BUILDER_IMAGE} AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# production stage
FROM ${RUNNER_IMAGE} AS production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]