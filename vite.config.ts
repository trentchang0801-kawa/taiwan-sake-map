import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { fileURLToPath, URL } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    // REPL 相關插件，這裡改成函式判斷
    ...(process.env.NODE_ENV !== "production" && process.env.REPL_ID
      ? (() => {
          const plugins = [];
          try {
            const cartographer = require("@replit/vite-plugin-cartographer").cartographer;
            plugins.push(cartographer());
          } catch {}
          try {
            const devBanner = require("@replit/vite-plugin-dev-banner").devBanner;
            plugins.push(devBanner());
          } catch {}
          return plugins;
        })()
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  root: path.resolve(__dirname, "client"),
  base: "./", // 重要：讓資源使用相對路徑
  build: {
    outDir: path.resolve(__dirname, "dist"), // 直接輸出到 dist
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
