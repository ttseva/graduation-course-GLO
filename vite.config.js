// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/graduation-course-GLO/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        kuhni: resolve(__dirname, 'kuhni.html'),
        balkony: resolve(__dirname, 'balkony.html'),
      },
    },
  },
})
