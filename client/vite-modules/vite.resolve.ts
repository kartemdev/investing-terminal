import * as path from 'path';
import { AliasOptions, ResolveOptions } from 'vite';

const viteResolve: ResolveOptions & { alias?: AliasOptions } = {
  alias: {
    '~app': path.resolve(__dirname, './src/app'),
  },
};

export default viteResolve;
