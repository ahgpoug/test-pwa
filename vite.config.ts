import { defineConfig, loadEnv } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd());

    const API_URL = `${env.ISC_PWA_API_URL ?? 'http://localhost:8080'}`;

    return {
        base: "/test-pwa/",
        server: {
            proxy: {
                '/api': {
                    target: API_URL,
                    changeOrigin: true,
                    secure: false,      
                    ws: true,
                }
            },
        },
        build: {
            sourcemap: true,
            assetsDir: "code",
            target: ["esnext"],
            cssMinify: true,
            lib: false,
            rollupOptions: {
                output: {
                    entryFileNames: 'code/code.js',
                    assetFileNames: 'code/code.css',
                    chunkFileNames: "code/code-chunk.js",
                    manualChunks: undefined,
                }
            }
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
    };
});