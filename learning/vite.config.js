import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    allowedHosts: [
      "rossana-swampiest-ungeographically.ngrok-free.dev"
    ],
    host: true
  },
  plugins: [react()],
  optimizeDeps: {
    include: ['three', '@splinetool/react-spline'],
  },
})
