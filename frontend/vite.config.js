import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
    allowedHosts: [
      'mern-app-1945846510.eu-north-1.elb.amazonaws.com',
    ],
    proxy: {
      '/api': {
        target: 'http://172.31.32.178:5000',
        changeOrigin: true,
      },
    },
  },
});