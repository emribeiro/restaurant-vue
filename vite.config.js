import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader()],
  server: {
    port: 8080,
  },
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `@import "./src/assets/css/variables.less";`
      }
    }
  }
})
