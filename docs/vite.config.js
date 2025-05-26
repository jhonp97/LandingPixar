import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()], 
  resolve: {
    alias: {
      "@": "/src"
    }
  },
  base: '/LandingPixar/', // Asegúrate de que es el nombre EXACTO de tu repositorio
  build: {
    outDir: 'docs' // Indica que los archivos deben generarse en docs
  }
})
