# @laverve/test-utils

This module provides test utilities.

Dependencies:
1. [Jest](https://jestjs.io/)

# Installation

## Inside application
1. Install dependencies
```
npm i --save @laverve/test-utils
```

2. Add `jest.config.ts` file in your root folder
```
import type { Config } from "jest";
import { jestConfig } from "@laverve/test-utils";

const config: Config = {
    ...jestConfig
};

export default config;


```
