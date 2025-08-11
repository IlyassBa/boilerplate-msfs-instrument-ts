// rollup.config.js
import multiEntry from '@rollup/plugin-multi-entry';
import resolve    from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import css        from 'rollup-plugin-import-css';
import copy       from 'rollup-plugin-copy';

export default {
  input: ['src/**/*.ts'],      // ← glob in every .ts
  plugins: [
    css({ output: 'custom.css' }),
    multiEntry({ entryFileName: 'custom.js' }),              // ← collapse into one bundle
    resolve(),
    typescript(),
    copy({
      targets: [
        { src: 'custom.html', dest: 'build' },
        { src: 'custom.css', dest: 'build' },
        { src: 'README.md',        dest: 'build' }
      ]
    })
  ],
  output: {
    dir:    'build',
    format: 'iife',
    entryFileNames: 'custom.js' // ← all TS ends up here
  }
};
