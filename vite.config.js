import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // TODO change to "/" when deploying to production
  base: "/",
  // base: "/interactive-revamp/",
});
