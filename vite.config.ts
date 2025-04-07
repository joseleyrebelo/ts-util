import path from "path";
import dts from "vite-plugin-dts";
import { defineConfig } from "vite";
import pkgJson from "./package.json";

export default defineConfig({
  plugins: [dts({ rollupTypes: true })],
  build: {
    minify: true,
		target: "modules",
    reportCompressedSize: true,
    lib: {
      name: "ts-util",
      entry: path.resolve(__dirname, "src/index.ts"),
      fileName: (format) => `index.${format}.js`,
      formats: ["es", "umd"],
    },
    rollupOptions: {
      external: [
				...Object.keys(pkgJson.dependencies || {}),
				...Object.keys(pkgJson.peerDependencies || {}),
			],
    },
  },
});
