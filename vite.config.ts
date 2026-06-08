import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  // User/org Pages site — served at https://chofito.github.io/ and www.chofito.dev
  base: '/',
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    allowedHosts: ['.ngrok-free.app', '.ngrok.io', '.ngrok.app'],
  },
});
