// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Base URL para tu aplicación en producción
  // Debe coincidir con la parte del path de tu URL de GitHub Pages
  base: '/Portfolio_personal/', // <-- ¡Añade esta línea aquí!
  plugins: [react()],
})