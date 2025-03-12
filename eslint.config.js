import globals from "globals";
import pluginJs from "@eslint/js";

@type {import('eslint').Linter.Config[]}
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
  },
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended,
  {
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
      "prettier/prettier": "error",
    },
  },
  {
    plugins: ["prettier"],
  },
  {
    extends: ["plugin:prettier/recommended"],
  },
];