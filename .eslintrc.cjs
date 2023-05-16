module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	overrides: [
	],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},

	rules: {
		"comma-dangle": [
			"error", 
			"always-multiline",
		],
		quotes: [
			"error", 
			"double",
		],
		semi: [
			"error",
			"always",
		],
		indent: [
			"error",
			"tab",
		],
	},
};
