import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { createStyleImportPlugin } from 'vite-plugin-style-import'; // Use named import

export default defineConfig({
  plugins: [
    vue(),
    createStyleImportPlugin({
      libs: [
        {
          libraryName: 'ant-design-vue',
          esModule: true,
          resolveStyle: (name) => `ant-design-vue/es/${name}/style/index`,
        },
      ],
    }),
  ],
});
