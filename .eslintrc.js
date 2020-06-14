module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: 'babel-eslint',
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
      globalReturn: false,
      impliedStrict: true,
    },
    sourceType: 'module',
    allowImportExportEverywhere: false,
    codeFrame: true,
  },
  plugins: [
    'react'
  ],
  rules: {
    indent: [
      'error',
      2,
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    quotes: [
      'error',
      'single'
    ],
    semi: [
      'error',
      'always'
    ],
    'no-undef': [ 1 ],
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
  },
};
