import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Determine base path based on environment
  let basePath = "/";
  
  if (mode === 'production') {
    // Check if building for AIT server or GitHub Pages
    if (process.env.DEPLOY_TARGET === 'ait') {
      basePath = "/airqn/";
    } else {
      // Default to GitHub Pages
      basePath = "/Center-for-Nexus-of-Air-Quality-Health-Ecosystem-and-Climate/";
    }
  }

  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    // Use dynamic base path based on deployment target
    base: basePath,
    
    // Build optimizations
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            // Split vendor libraries
            vendor: ['react', 'react-dom'],
            ui: ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', '@radix-ui/react-tabs'],
            animation: ['framer-motion'],
            router: ['react-router-dom'],
            supabase: ['@supabase/supabase-js'],
          },
        },
      },
      chunkSizeWarningLimit: 1000, // Increase limit to 1000kb
    },
  };
});
