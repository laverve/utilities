import js from "@eslint/js";
import globals from "globals";
import eslintPluginJsonc from "eslint-plugin-jsonc";
import tseslint from "typescript-eslint";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import reactPlugin from "eslint-plugin-react";

export const config = [
    js.configs.recommended,
    eslintPluginPrettierRecommended,
    ...eslintPluginJsonc.configs["flat/recommended-with-jsonc"],
    ...tseslint.configs.recommended.map((config) => ({
        ...config,
        files: ["**/*.ts", "**/*.tsx", "**/*.mts", "**/*.cts"]
    })),
    {
        files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
        ...reactPlugin.configs.flat.recommended
    },
    {
        files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
        languageOptions: {
            globals: {
                ...globals.serviceworker,
                ...globals.browser
            }
        }
    },
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.es2025
            }
        },

        ignores: [
            "node_modules/*",
            "**/node_modules/*",
            "**/dist/**/*",
            "dist/*",
            "./dist/**/*",
            "package-lock.json",
            "**/*.snap",
            "**/*.svg",
            "**/*.png",
            "**/*.jpg",
            "**/*.jpeg",
            "**/*.css"
        ]
    },
    {
        rules: {
            "prettier/prettier": "error",
            "jsonc/sort-keys": "error"
        }
    },
    {
        files: ["package.json", "package-lock.json"],
        rules: {
            "jsonc/sort-keys": "off"
        }
    },
    {
        ignores: [
            "node_modules/*",
            "**/node_modules/*",
            "**/dist/**/*",
            "dist/*",
            "./dist/**/*",
            "package-lock.json",
            "**/*.snap",
            "**/*.svg",
            "**/*.png",
            "**/*.jpg",
            "**/*.jpeg",
            "**/*.css"
        ]
    }
];
