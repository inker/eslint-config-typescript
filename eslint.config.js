import tseslint from "typescript-eslint";

import config from "./index.js";

export default [
  ...config,
  // this repo is plain JavaScript,
  // so there's no TypeScript program for the typed rules to read
  tseslint.configs.disableTypeChecked,
  {
    rules: {
      // Node needs the extension on relative imports in ES modules
      "import/extensions": [2, "ignorePackages"],
    },
  },
];
