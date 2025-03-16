import eslintJs from "@eslint/js";
import globals from "globals";
import eslintPluginJsonc from "eslint-plugin-jsonc";
import eslintTs from "typescript-eslint";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import eslintPluginCommentsRecommended from "@eslint-community/eslint-plugin-eslint-comments/configs";
import reactPlugin from "eslint-plugin-react";
import i18next from "eslint-plugin-i18next";

export const config = eslintTs.config(
    eslintPluginCommentsRecommended.recommended,
    {
        ignores: [
            "dist/",
            "node_modules/",
            "package-lock.json",
            "**/*.snap",
            "**/*.svg",
            "**/*.png",
            "**/*.jpg",
            "**/*.jpeg",
            "**/*.css"
        ]
    },
    eslintJs.configs.recommended,
    {
        files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
        languageOptions: {
            globals: {
                ...globals.serviceworker,
                ...globals.browser,
                ...globals.node,
                ...globals.es2025
            }
        }
    },
    ...eslintTs.configs.recommended.map((config) => ({
        ...config,
        files: ["**/*.ts", "**/*.tsx", "**/*.mts", "**/*.cts"]
    })),
    // START: prettier
    {
        ...eslintPluginPrettierRecommended
    },
    // END: prettier
    // START: react
    {
        files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
        ...reactPlugin.configs.flat.recommended,
        settings: {
            react: {
                version: "detect"
            }
        },
        rules: {
            ...reactPlugin.configs.flat.recommended.rules,
            "react/require-default-props": 0,
            "react/function-component-definition": [
                2,
                { namedComponents: "arrow-function", unnamedComponents: "arrow-function" }
            ]
        }
    },
    // END: react
    // START: i18next
    {
        plugins: { i18next },
        rules: {
            "i18next/no-literal-string": ["error"]
        }
    },
    {
        files: ["**/*.spec.ts", "**/*.spec.tsx", "**/*.spec.js", "**/*.spec.jsx", "**/*.story.tsx"],
        rules: {
            "i18next/no-literal-string": 0
        }
    },
    // END: i18next
    // START: jsonc
    ...eslintPluginJsonc.configs["flat/recommended-with-jsonc"],
    {
        rules: {
            "jsonc/sort-keys": "error",
            "no-plusplus": 0
        }
    },
    {
        files: ["**/package.json", "**/package-lock.json"],
        rules: {
            "jsonc/sort-keys": "off"
        }
    }
    // END: jsonc
);
