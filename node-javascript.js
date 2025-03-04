module.exports = {
  env: {
    es2021: true,
    node: true,
    browser: true,
  },
  extends: ['standard', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [],
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'always',
        semi: false,
      },
    ],
    'no-useless-constructor': 'off',
  },
  settings: {
    'import/extensions': ['.js', '.mjs', '.cjs'],
  },
}
