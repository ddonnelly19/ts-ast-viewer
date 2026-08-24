import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// No monaco plugin: the workers are wired up in src/components/monacoEnvironment.ts with
// vite's own `?worker` imports. monaco has to stay out of the dep optimizer for those to
// resolve. (vite-plugin-monaco-editor also breaks under Deno's node compat.)
export default defineConfig({
<<<<<<< HEAD
  plugins: [
    react(),
    (monacoEditorPlugin).default.default({}),
  ],
=======
  plugins: [react()],
  optimizeDeps: {
    exclude: ["monaco-editor"],
  },
>>>>>>> cbcacc6181b1e3ef09f3f61eb3d8056c004a5bd9
});
