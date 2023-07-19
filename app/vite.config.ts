import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      manifest: {
        theme_color: "#11cc11",
        icons: [
          {
            src: "/vite.svg", // needs a 512x512 px png icon from which other asset resolutions are to be generated using pwa-asset-generator
            sizes: "512x512",
            type: "image/svg+xml",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
  server: {
    proxy: {
      "/api": {
        target: "https://api.up-ai.in/",
        changeOrigin: true,
      },
    },
  },
});
