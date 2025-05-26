import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()], 
  resolve: {
    alias: {
      "@": "/src"
    }
  },
  base: '/LandingPixar/' // Usa exactamente el nombre del repositorio
})
