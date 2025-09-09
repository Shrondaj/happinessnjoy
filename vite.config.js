import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11'],
      modernPolyfills: true
    }),
    visualizer({
      filename: 'dist/stats.html',
      open: false,
      gzipSize: true
    })
  ],
  css: {
    transformer: 'lightningcss',
    lightningcss: {
      minify: true
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: process.env.NODE_ENV === 'development',
    minify: 'terser',
    target: 'es2020',
    cssTarget: 'chrome80',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info']
      },
      mangle: {
        safari10: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vite']
        },
        assetFileNames: 'assets/[name].[hash][extname]',
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',
        compact: true
      },
      treeshake: {
        preset: 'recommended',
        moduleSideEffects: false
      }
    },
    reportCompressedSize: false,
    chunkSizeWarningLimit: 1000
  },
  server: {
    port: 3000,
    host: true,
    open: true,
    cors: true
  },
  preview: {
    port: 4173,
    host: true,
    cors: true
  },
  define: {
    __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
    __VERSION__: JSON.stringify(process.env.npm_package_version)
  }
});