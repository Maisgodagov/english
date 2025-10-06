import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, '../mobile/src/app'),
      '@entities': path.resolve(__dirname, '../mobile/src/entities'),
      '@features': path.resolve(__dirname, '../mobile/src/features'),
      '@pages': path.resolve(__dirname, '../mobile/src/pages'),
      '@shared': path.resolve(__dirname, '../mobile/src/shared'),
      '@widgets': path.resolve(__dirname, '../mobile/src/widgets'),
      '@mobile': path.resolve(__dirname, '../mobile/src'),
      '@english/shared': path.resolve(__dirname, '../../packages/shared/src'),
      'react-native': 'react-native-web',
      'react-native-safe-area-context': path.resolve(__dirname, './src/mocks/safe-area-context'),
    },
  },
  define: {
    __DEV__: true,
  },
});
