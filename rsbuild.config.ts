import {defineConfig} from '@rsbuild/core';
import {pluginReact} from '@rsbuild/plugin-react';
import {pluginSvgr} from '@rsbuild/plugin-svgr';
export const BASE_PATH = '/wiic-antd-react';
export default defineConfig({
    plugins: [
        pluginReact(),
        pluginSvgr({
            svgrOptions: {
                exportType: 'named',
            },
            mixedImport: true,
        })
    ],
    server: {
        // base path
        // base: '/wiic-antd-react',
        base: BASE_PATH,
    },
    tools: {
        swc: {
            jsc: {
                experimental: {
                    plugins: [['@swc/plugin-styled-components', {}]],
                },
            },
        },
    },

});
