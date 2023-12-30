import { defineConfig } from 'vite';
import { viteBuild, vitePlugins, viteResolve } from './vite-modules';

export default defineConfig({
  base: '',
  plugins: vitePlugins,
  resolve: viteResolve,
  build: viteBuild,
});
