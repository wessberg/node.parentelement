import { terser } from "rollup-plugin-terser";

const MINIFY = process.env.NODE_ENV === "production";

export default {
	input: "src/index.js",
	plugins: MINIFY ? [
		terser({
			compress: true,
			ie8: true,
			mangle: true,
		})
	] : []
}
