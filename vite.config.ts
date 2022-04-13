import { UserConfigExport, ConfigEnv } from 'vite';

// Auto import components
import Components from 'unplugin-vue-components/vite';

// Auto import defaults
import AutoImport from 'unplugin-auto-import/vite'

// Mock server
import { viteMockServe } from 'vite-plugin-mock';

// LiveReload for mock server
import liveReload from 'vite-plugin-live-reload';

// Quasar components
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';

// Vitest
import { vitest } from 'vitest';

import vue from '@vitejs/plugin-vue';

export default ({ command }: ConfigEnv): UserConfigExport => {
  return {
    plugins: [
      vue({
        template: { transformAssetUrls },
      }),
      Components({
        dirs: ['src/shared/components'],
      }),
      liveReload('mock/**/*'),
      viteMockServe({
        mockPath: 'mock',
        watchFiles: true,
        localEnabled: command === 'serve',
      }),
      AutoImport({
        imports: ['vitest'],
        dts: true, // generate TypeScript declaration
      }),
      quasar({
        sassVariables: 'src/shared/styles/quasar-variables.sass'
      }),
    ],
    test: {
      globals: true,
      deps: {
        inline: ['@vue', '@vueuse', 'vue-demi'],
      },
    },
  };
};
