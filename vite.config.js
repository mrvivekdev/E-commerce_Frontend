import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': "https://e-commerce-backend-seven-ashy.vercel.app/",
    },
    host: '0.0.0.0',
    port: 5173,
  },
  plugins: [react()],
})
