import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/AEC-portfolio/",
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  build: {
    // Code splitting configuration
    rollupOptions: {
      output: {
        // Manual chunks to optimize bundle
        manualChunks: {
          // Vendor libraries
          "vendor-react": ["react", "react-dom"],
          "vendor-framer": ["framer-motion"],
          "vendor-icons": ["react-icons"],
          "vendor-i18n": ["i18next", "react-i18next"],
        },
      },
    },
    // Optimize CSS code splitting
    cssCodeSplit: true,
    // Minify with esbuild (default and faster)
    minify: "esbuild",
  },
});
