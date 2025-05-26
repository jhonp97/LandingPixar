import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()], 
  resolve: {
    alias: {
      "@": "/src"
    }
  },
  base: '/LandingPixar/', // Es el nombre del repositorio, no la carpeta "docs"
  build: {
    outDir: 'docs' // Vite coloca los archivos en esta carpeta
  }
});

