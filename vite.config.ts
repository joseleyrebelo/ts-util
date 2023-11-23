import packageJson from "./package.json";

import path from "path";
import dts from "vite-plugin-dts";

import { defineConfig } from "vite";

const resolvePath = (str: string) => path.resolve(__dirname, str);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [dts({ rollupTypes: true })],
  build: {
    reportCompressedSize: true,
    minify: "terser",
    terserOptions: {
      compress: {
        keep_classnames: true,
        keep_fnames: true,
      },
    },
    lib: {
      entry: resolvePath("src/index.ts"),
      name: "index",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
      // output: {
      //   globals: {
      //     react: "React",
      //   },
      // },
    },
  },
});
