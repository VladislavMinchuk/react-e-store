import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "bootstrap/scss/functions";
          @import "bootstrap/scss/variables";
          @import "bootstrap/scss/mixins";
          @import "./src/assets/styles/variables";
          @import "./src/assets/styles/include-media";
        `
      }
    }
  }
})
