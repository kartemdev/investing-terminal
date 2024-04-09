import * as path from 'path';
import { AliasOptions, ResolveOptions } from 'vite';

const viteResolve: ResolveOptions & { alias?: AliasOptions } = {
  alias: {
    '~app': path.resolve(__dirname, '../src/app'),
    '~shared': path.resolve(__dirname, '../src/shared'),
    '~widgets': path.resolve(__dirname, '../src/widgets'),
    '~mixins': path.resolve(__dirname, '../src/shared/scss/mixins'),
  },
};

export default viteResolve;
