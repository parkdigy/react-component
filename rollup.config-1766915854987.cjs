'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var peerDepsExternal = require('rollup-plugin-peer-deps-external');
var resolve = require('@rollup/plugin-node-resolve');
var commonjs = require('@rollup/plugin-commonjs');
var typescript = require('rollup-plugin-typescript2');
var sass = require('rollup-plugin-sass');
var eslint = require('@rollup/plugin-eslint');
var del = require('rollup-plugin-delete');
var babel = require('@rollup/plugin-babel');
var fs = require('fs');
var path = require('path');
var packageJson = require('./package.json');

const getOutput = (path, format) => ({
  file: path,
  format: format,
  sourcemap: false,
  compact: true,
  exports: 'named',
});

const getConfig = () => ({
  input: 'src/index.ts',
  output: [getOutput(packageJson.main, 'cjs'), getOutput(packageJson.module, 'esm')],
  external: Object.keys(packageJson.dependencies || {}),
  context: 'window',
  onwarn(warning, warn) {
    // 'Unused external imports' 경고 중에서 react의 useMemo, useCallback 관련은 무시
    if (
      warning.code === 'UNUSED_EXTERNAL_IMPORT' &&
      warning.exporter === 'react' &&
      (warning.names.includes('useMemo') || warning.names.includes('useCallback'))
    ) {
      return;
    }
    warn(warning);
  },
  plugins: [
    del({ targets: 'dist/*' }),
    peerDepsExternal(),
    eslint({
      throwOnError: true,
      throwOnWarning: true,
      include: ['src/**'],
      exclude: ['node_modules/**', 'dist/**', 'examples/**', 'test/**'],
    }),
    typescript({
      useTsconfigDeclarationDir: true,
      tsconfigOverride: {
        compilerOptions: {
          emitDeclarationOnly: true,
        },
      },
    }),
    babel({
      babelHelpers: 'bundled',
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
      plugins: [
        [
          'babel-plugin-react-compiler',
          {
            panicThreshold: 'all_errors',
          },
        ],
      ].filter(Boolean),
    }),
    sass({
      insert: true,
      api: 'modern',
      options: {
        style: 'compressed',
      },
    }),
    resolve({ extensions: ['.js', '.jsx', '.ts', '.tsx'] }),
    commonjs({
      include: /node_modules/,
    }),
    // *.private 디렉토리, *.private.d.ts 파일 제거
    {
      name: 'remove-d-ts-plugin',
      generateBundle() {
        const removeFromDir = (dir) => {
          const files = fs.readdirSync(dir);
          files.forEach((file) => {
            const filePath = path.join(dir, file);
            if (fs.statSync(filePath).isDirectory()) {
              if (filePath.endsWith('.private')) {
                fs.rmSync(filePath, { recursive: true, force: true });
              } else {
                removeFromDir(filePath);
              }
            } else {
              filePath.endsWith('.private.d.ts') && fs.unlinkSync(filePath);
            }
          });
        };
        removeFromDir('./dist');
      },
    },
  ],
});

var rollup_config = [getConfig()];

exports.default = rollup_config;
