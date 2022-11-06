module.exports = {
  env: {
    browser: true,
    es2016: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    parser: require.resolve('@typescript-eslint/parser'),
    extraFileExtensions: ['.vue'],
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['vue', 'prettier', '@typescript-eslint', 'hexagonal-architecture'],
  rules: {
    'prettier/prettier': 'error',
    'vue/multi-word-component-names': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
  },
  // overrides: [
  //   {
  //     files: ['packages/core/media/**/*.ts', 'packages/core/data/**/*.ts'],
  //     rules: {
  //       'hexagonal-architecture/enforce': ['error'],
  //     },
  //   },
  // ],
};
