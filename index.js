module.exports = {
  parser: '@typescript-eslint/parser',

  parserOptions: {
    project: './tsconfig.json',
  },

  extends: [
    '@inker/eslint-config',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/strict',
    'plugin:import/typescript',
  ],

  plugins: [
    '@typescript-eslint',
  ],

  settings: {
    // Append 'ts' extensions to Airbnb 'import/resolver' setting
    'import/resolver': {
      // use <root>/tsconfig.json
      typescript: {
        // always try to resolve types under `<roo/>@types` directory
        // even if it doesn't contain any source code, like `@types/unist`
        alwaysTryTypes: true,
      },
      node: {
        extensions: [
          '.mjs',
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.json',
        ],
      },
    },
    // Append 'ts' extensions to Airbnb 'import/extensions' setting
    'import/extensions': [
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
      '.mjs',
    ],
  },

  rules: {
    'import/consistent-type-specifier-style': [2, 'prefer-inline'],

    '@typescript-eslint/array-type': 2,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/consistent-type-imports': [2, {
      fixStyle: 'inline-type-imports',
    }],
    '@typescript-eslint/default-param-last': 2,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/method-signature-style': 2,
    '@typescript-eslint/no-explicit-any': 0,
    'no-extra-parens': 0,
    '@typescript-eslint/no-extra-parens': [2, 'all', {
      enforceForArrowConditionals: false,
      enforceForNewInMemberExpressions: false,
    }],
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-shadow': 2,
    '@typescript-eslint/no-unnecessary-condition': 0,
    '@typescript-eslint/no-unused-vars': [2, {
      vars: 'all',
      args: 'after-used',
      ignoreRestSiblings: false,
    }],
    '@typescript-eslint/prefer-nullish-coalescing': [2, {
      ignorePrimitives: {
        string: true,
      },
    }],
    '@typescript-eslint/prefer-optional-chain': 2,
    '@typescript-eslint/prefer-readonly': 2,
  },
}
