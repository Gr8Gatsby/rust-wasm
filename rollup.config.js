import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import wasm from '@rollup/plugin-wasm';
import copy from 'rollup-plugin-copy';

export default {
  input: './pkg/hello_wasm.js',  // Your entry point for Rollup
  output: {
    file: './public/bundle.js',  // Output bundle file
    format: 'es',                // Use ES module format
  },
  plugins: [
    resolve(),
    wasm(),  // Allows Rollup to bundle WebAssembly files
    terser(),  // Minify the JavaScript output
    copy({
      targets: [
        { src: 'pkg/hello_wasm_bg.wasm', dest: 'public' }  // Copy the wasm file to the public folder
      ]
    })
  ],
};
