import babel from 'rollup-plugin-babel'
import external from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'

export default [
  {
    input: './lib/index.ts',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
      },
      {
        file: 'dist/index.es.js',
        format: 'es',
        exports: 'named',
      },
    ],
    plugins: [
      babel({
        exclude: 'node_modules/**',
        presets: [],
      }),
      commonjs({
        include: 'node_modules/**',
      }),
      external(),
      resolve(),
      typescript(),
      terser(),
      json(),
    ],
  },
]
