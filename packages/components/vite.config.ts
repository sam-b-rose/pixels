import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs'],
      fileName: (format) => `pixels-components.${format}.js`,
    },
    outDir: './dist',
    rollupOptions: {
      external: ['react', 'goober', '@pixels/tokens'],
      output: {
        globals: {
          react: 'React',
          goober: 'Goober',
          '@pixels/tokens': 'PixelsTokens',
        },
      },
    },
  },
});
