import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        // Adjust the chunk size warning limit (default is 500 kB)
        chunkSizeWarningLimit: 1000, // Adjust this value as needed
      },
    plugins: [react()],
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:8000/api',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
        },
    },
});
