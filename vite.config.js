import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/LandingPixar/', // ⚠️ Muy importante: el nombre del repo con /
  plugins: [react()]
})
