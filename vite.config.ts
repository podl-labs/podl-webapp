import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],

  // Needed for Github pages- https://vitejs.dev/guide/static-deploy.html#github-pages
  base: '/podl-webapp/'
})
