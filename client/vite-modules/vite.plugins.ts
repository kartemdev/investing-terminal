import { PluginOption } from 'vite';
import reactPlugin from '@vitejs/plugin-react';
import checkerPlugin from 'vite-plugin-checker';
import dtsPlugin from 'vite-plugin-dts';


const vitePlugins: PluginOption[] = [
  reactPlugin(),
  checkerPlugin({
    typescript: true,
  }),
  dtsPlugin({
    insertTypesEntry: true,
  })
];

export default vitePlugins;
