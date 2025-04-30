// tsup.config.ts
import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  outDir: 'dist',
  clean: true,
  splitting: false, // optional, set to true if you use multiple entry points
  sourcemap: true,
  minify: true,
  external: [
    'lodash.deburr',
    'lodash.every',
    'lodash.get',
    'lodash.isempty',
    'lodash.negate',
    'lodash.orderby',
    'natural',
    'tslib'
  ],
  outExtension({ format }) {
    return {
      js: format === 'esm' ? '.mjs' : '.cjs',
    }
  },
  treeshake: true,
})
