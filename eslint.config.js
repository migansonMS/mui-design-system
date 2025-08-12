// eslint.config.js
import storybook from "eslint-plugin-storybook";
import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { globalIgnores } from "eslint/config";

export default tseslint.config(
  [
    globalIgnores(["dist"]),
    {
      files: ["**/*.{js,jsx,ts,tsx}"], // 👈 now includes JS + JSX
      extends: [
        js.configs.recommended,
        tseslint.configs.recommended,
        reactHooks.configs["recommended-latest"],
        reactRefresh.configs.vite,
      ],
      languageOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        globals: globals.browser,
        parserOptions: {
          ecmaVersion: "latest",
          sourceType: "module",
          ecmaFeatures: {
            jsx: true, // 👈 parse JSX syntax
          },
        },
      },
    },
  ],
  storybook.configs["flat/recommended"] // 👈 keep Storybook plugin
);
