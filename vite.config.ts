import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { intlayerPlugin } from "vite-intlayer";
import pkg from "./package.json";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), intlayerPlugin()],
  base: process.env.NODE_ENV === "development" ? "/" : `/${pkg.name}/`,
});
