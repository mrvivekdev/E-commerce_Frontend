import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': "http://localhost:9090",
    },
    host: '0.0.0.0',
    port: 5173,
  },
  plugins: [react()],
})
