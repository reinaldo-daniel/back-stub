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
        "import/order": ["error", {
            groups: [["builtin", "external"], "internal", ["parent", "sibling"], "index"],
            "newlines-between": "always",
            alphabetize: {
                order: "asc",
                caseInsensitive: true,
            },
        }],
        "max-len": [
            "error",
            200,
        ],
        "import/extensions": "off",
        "import/no-unresolved": ["error", { ignore: ["^joi$"] }],
        "class-methods-use-this": "off",
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
