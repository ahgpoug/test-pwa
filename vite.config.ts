import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
    base: "/test-pwa/",
    build: {
        sourcemap: true,
        assetsDir: "code",
        target: ["esnext"],
        cssMinify: true,
        lib: false
    },
    plugins: [
        VitePWA({
            strategies: "injectManifest",
            injectManifest: {
                swSrc: 'public/sw.js',
                swDest: 'dist/sw.js',
                globDirectory: 'dist',
                globPatterns: [
                    '**/*.{html,js,css,json,png,svg}',
                ],
            },
            injectRegister: false,
            manifest: false,
            devOptions: {
                enabled: true
            }
        })
    ]
})
