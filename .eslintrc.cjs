module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: "airbnb-base",
    overrides: [
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    rules: {
        "max-len": [
            "error",
            200,
        ],
        "import/extensions": ["error", "ignorePackages", {
            js: "always",
        }],
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
            4,
        ],
    },
};
