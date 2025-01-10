import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      parser: "@babel/eslint-parser", // Add Babel parser for JSX
      parserOptions: {
        ecmaVersion: "latest", // Use the latest ECMAScript version
        sourceType: "module", // Enable ECMAScript modules
        ecmaFeatures: {
          jsx: true, // Enable JSX
        },
      },
      globals: globals.browser,
    },
    rules: {
      // Add rules or override here
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];
