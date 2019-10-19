module.exports = {
  parser: '@typescript-eslint/parser',

  extends: [
    '@calipsa/eslint-config',
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
    '@typescript-eslint/no-unused-vars': [2, {
      vars: 'all',
      args: 'after-used',
      ignoreRestSiblings: false,
    }],
  },
}
