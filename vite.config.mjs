import vue from '@vitejs/plugin-vue'
import { defineConfig, loadEnv } from 'vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import { fileURLToPath } from 'url'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [vue(), nodePolyfills()],
    base: './',
    resolve: {
      alias: [
        {
          find: /@\/components\/((?!.*[.](ts|js|tsx|jsx|vue)$).*$)/,
          replacement: fileURLToPath(
            new URL('./src/components/$1/index.vue', import.meta.url)
          ),
        },
        {
          find: '@',
          replacement: fileURLToPath(new URL('./src', import.meta.url)),
        },
      ],
    },
    define: {
      'process.env.API_PROTO': JSON.stringify(env.API_PROTO),
      'process.env.API_HOST': JSON.stringify(env.API_HOST),
      'process.env.API_PORT': env.API_PORT,
      'process.env.CONTRACT_ADDR': JSON.stringify(env.CONTRACT_ADDR),
    },
  }
})
