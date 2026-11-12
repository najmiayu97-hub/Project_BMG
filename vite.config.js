import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// Base path for the production build. Defaults to '/' for local dev/preview;
// the GitHub Pages workflow sets BASE_PATH=/bmg/.
const base = process.env.BASE_PATH || '/'

// Hosts allowed to reach the dev/preview server. Tunnel services such as
// ngrok send their public domain in the Host header, which Vite blocks by
// default ("Blocked request. This host is not allowed"). A leading dot
// matches the domain itself and all subdomains.
// Add your reserved/custom ngrok domain here if you have one.
const allowedHosts = [
  '.ngrok-free.app',
  '.ngrok-free.dev',
  '.ngrok.app',
  '.ngrok.dev',
  '.ngrok.io',
]

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts,
  },
  preview: {
    allowedHosts,
  },
})
