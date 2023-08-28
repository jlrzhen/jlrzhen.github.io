import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  //https://stackoverflow.com/questions/71357957/unable-to-map-docker-port-from-vite-app-to-local
  server: {
    watch: {
      usePolling: true,
    },
    host: true, // needed for the Docker Container port mapping to work
    strictPort: true,
    port: 3000, // replace this port with any number you want
  },
})
