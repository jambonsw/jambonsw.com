/** @type {import("prettier").Config} */
export default {
	// Core Prettier Options
	bracketSpacing: true,
	bracketSameLine: false,
	htmlWhitespaceSensitivity: "css",
	proseWrap: "preserve",
	semi: false,
	singleQuote: false,
	trailingComma: "all",
	// Plugins
	plugins: ["prettier-plugin-astro"],
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
	],
}
