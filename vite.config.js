import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/**
 * Vercel: base should be "/"
 * GitHub Pages: base should be "/<repo>/"
 *
 * We'll control it using an env var in GitHub Actions.
 */
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE ?? "/",
});
