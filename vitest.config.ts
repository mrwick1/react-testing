import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    include: ["**/*.test.tsx"],
    globals: true,
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    environment: "jsdom",
  },
});
