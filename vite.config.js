import path from 'path';
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        about: path.resolve(__dirname, 'about.html'),
        services: path.resolve(__dirname, 'services.html'),
        project: path.resolve(__dirname, 'project.html'),
        contact: path.resolve(__dirname, 'contact.html'),
        blogs: path.resolve(__dirname, 'blogs.html'),
      },
    },
  },
  plugins: [
    tailwindcss(),
  ],
})