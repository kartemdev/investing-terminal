import { defineConfig } from 'vite';
import { viteBuild, viteCSS, vitePlugins, viteResolve } from './vite-modules';

export default defineConfig({
  base: '',
  plugins: vitePlugins,
  resolve: viteResolve,
  build: viteBuild,
  css: viteCSS,
});
