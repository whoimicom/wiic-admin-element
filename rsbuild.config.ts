import {defineConfig} from '@rsbuild/core';
import {pluginReact} from '@rsbuild/plugin-react';
import {pluginSvgr} from '@rsbuild/plugin-svgr';

export default defineConfig({
    plugins: [
        pluginReact(),
        pluginSvgr({
            svgrOptions: {
                exportType: 'named',
            },
        })
    ],
    server: {
        // base path
        base: '/wii-antd-react',
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
