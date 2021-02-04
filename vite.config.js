import vue from '@vitejs/plugin-vue'
import path from "path";
import { defineConfig } from 'vite';

/**
 * https://vitejs.dev/config/
 * @type {import('vite').UserConfig}
 */
defineConfig
export default defineConfig({
  // css:{},
  alias:{
    "@":path.resolve(__dirname,"src"),
  },
  plugins: [vue()]
});
