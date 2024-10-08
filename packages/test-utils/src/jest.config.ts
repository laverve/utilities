/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from "jest";

export const jestConfig: Config = {
    preset: "ts-jest",
    clearMocks: true,
    coverageProvider: "v8",
    testEnvironment: "node",
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
            "@laverve/test-utils/dist/src/__mocks__/styleMock",
        "\\.(css|less|sass|scss)$": "@laverve/test-utils/dist/src/__mocks__/styleMock"
    },
    watchPlugins: ["jest-watch-typeahead/filename", "jest-watch-typeahead/testname"],
    setupFiles: ["react-app-polyfill/jsdom"],
    resetMocks: true,
    extensionsToTreatAsEsm: [".ts"],
    transform: {
        // '^.+\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`
        // '^.+\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`
        "^.+\\.tsx?$": [
            "ts-jest",
            {
                useESM: true
            }
        ]
    }
};
