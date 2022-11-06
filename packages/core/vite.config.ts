import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [dts()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'vite-boilerplate-core',
      fileName: (format) => `vite-boilerplate-core.${format}.js`,
    },
    rollupOptions: {
      output: {
        globals: (id) => {
          console.log(id, '===global');
          return id;
        }, // required for umd output
      },
    },
  },
});
