// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Replace 'your-username' and 'repo-name' with your GitHub username and repo name.
export default defineConfig({
  plugins: [react()],
  base: "/Mokshe/", // Use your repository name here
});
