import base from "@inker/eslint-config";
import stylistic from "@stylistic/eslint-plugin";
import { createTypeScriptImportResolver } from "eslint-import-resolver-typescript";
import { createNodeResolver } from "eslint-plugin-import-x";
import tseslint from "typescript-eslint";

export default [
  ...base,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    name: "@inker/eslint-config-typescript",

    plugins: {
      "@stylistic": stylistic,
    },

    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
      },
    },

    settings: {
      "import-x/resolver-next": [
        // always try to resolve types under `<root>/@types` directory
        // even if it doesn't contain any source code, like `@types/unist`
        createTypeScriptImportResolver({
          alwaysTryTypes: true,
        }),
        createNodeResolver({
          extensions: [".mjs", ".js", ".jsx", ".ts", ".tsx", ".json"],
        }),
      ],
      // Append 'ts' extensions to Airbnb 'import-x/extensions' setting
      "import-x/extensions": [".js", ".jsx", ".ts", ".tsx", ".mjs"],
      // import-x's own TypeScript preset would also register the plugin
      // as `import-x` & turn off `import-x/named` rather than `import/named`,
      // so its settings are copied instead
      "import-x/external-module-folders": [
        "node_modules",
        "node_modules/@types",
      ],
      "import-x/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx", ".cts", ".mts"],
      },
    },

    rules: {
      "import/named": 0,
      "import/consistent-type-specifier-style": [2, "prefer-inline"],

      "default-param-last": 0, // The TS one is enabled
      "no-shadow": 0, // The TS one is enabled
      "no-unused-vars": 0, // The TS one is enabled
      "no-use-before-define": 0, // The TS one is enabled

      "@stylistic/padding-line-between-statements": [
        2,
        {
          blankLine: "always",
          prev: "*",
          next: ["function", "class", "cjs-export", "interface", "type"],
        },
        {
          blankLine: "always",
          prev: ["function", "class", "cjs-export", "interface", "type"],
          next: "*",
        },
      ],

      "@typescript-eslint/array-type": 2,
      "@typescript-eslint/ban-ts-comment": 0,
      "@typescript-eslint/ban-ts-ignore": 0,
      "@typescript-eslint/consistent-type-imports": [
        2,
        {
          fixStyle: "inline-type-imports",
        },
      ],
      "@typescript-eslint/default-param-last": 2,
      "@typescript-eslint/explicit-module-boundary-types": 0,
      "@typescript-eslint/method-signature-style": 2,
      "no-extra-parens": 0,
      "@stylistic/no-extra-parens": [
        2,
        "all",
        {
          ignoredNodes: [
            'ArrowFunctionExpression[body.type="ConditionalExpression"]',
            'MemberExpression[object.type="NewExpression"]',
          ],
        },
      ],
      "@typescript-eslint/no-shadow": 2,
      "@typescript-eslint/no-unnecessary-condition": 0,
      "@typescript-eslint/no-unused-vars": [
        2,
        {
          vars: "all",
          args: "after-used",
          ignoreRestSiblings: false,
        },
      ],
      "@typescript-eslint/prefer-nullish-coalescing": [
        2,
        {
          ignoreConditionalTests: true,
          ignorePrimitives: {
            boolean: true,
            bigint: true,
            number: true,
            string: true,
          },
        },
      ],
      "@typescript-eslint/prefer-optional-chain": 2,
      "@typescript-eslint/prefer-readonly": 2,
    },
  },
];
