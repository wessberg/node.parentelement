import {minify} from "uglify-js";
import uglify from "rollup-plugin-uglify";

const MINIFY = process.env.NODE_ENV === "production";

export default {
	entry: "src/index.js",
	plugins: MINIFY ? [
		uglify({
			compress: {
				warnings: false,
				dead_code: true,
				unsafe: true,
				drop_console: true,
				unused: true,
				loops: true,
				booleans: true,
				conditionals: true,
				sequences: true,
				properties: true,
				comparisons: true,
				if_return: true,
				join_vars: true,
				cascade: true,
				collapse_vars: true
			},
			screwIE8: true,
			comments: false,
			mangle: true
		}, minify)
	] : []
}
