import type { Config } from "jest";
// eslint-disable-next-line import/no-relative-packages
import { jestConfig } from "@laverve/test-utils";

const config: Config = {
    ...jestConfig,
    modulePathIgnorePatterns: ["<rootDir>/packages/test/"]
};

export default config;
