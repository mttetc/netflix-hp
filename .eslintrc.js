module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module",
    tsconfigRootDir: __dirname,
  },
  plugins: ["@typescript-eslint", "import", "react-hooks"],
  extends: [
    // Recommended defaults for ESLint:
    "eslint:recommended",
    // Turn off what's checked by TS compiler:
    "plugin:@typescript-eslint/eslint-recommended",
    // Turn on recommended TS-specific rules:
    "plugin:@typescript-eslint/recommended",
    // Turn on extra rules that require type-checking:
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    // Turn on rules for imports:
    "plugin:import/typescript",
    // Turn off rules conflicting with Prettier:
    "prettier",
  ],
  ignorePatterns: ["node_modules", "dist", "coverage", ".eslintrc.js"],
  rules: {
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-unnecessary-type-constraint": "off",
    "@typescript-eslint/no-unsafe-argument": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/restrict-plus-operands": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/unbound-method": "off",
    "import/order": "error",
    "no-console": "warn",
    "no-empty-pattern": "warn",
    "no-extra-boolean-cast": "off",
    "no-restricted-globals": [
      "error",
      "event",
      "name",
      "external",
      "orientation",
    ],
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "error",
  },
};
