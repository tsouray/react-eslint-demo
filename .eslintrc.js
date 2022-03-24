// eslint-disable-next-line no-undef
module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    'prefer-arrow',
  ],
  'rules': {
    'indent': ['error',2],
    'linebreak-style': ['error','unix'],
    'quotes': ['error','single'],
    'semi': ['error','always'],
    'no-var': 'error',
    'react/react-in-jsx-scope': 'off',       // Line 1 : import React, { useState } from 'react';
    // 'react/jsx-closing-bracket-location': 'error',
    'prefer-const': 'error',
    'prefer-template': 'error',
    'template-curly-spacing': ['error', 'never'],
    'comma-dangle':['error', {
      'objects': 'always-multiline',
      'arrays': 'always-multiline',
      'functions': 'always-multiline',
      'imports': 'always-multiline',
      'exports': 'always-multiline',
    }],
    'prefer-arrow/prefer-arrow-functions': [
      'error',
      {
        'disallowPrototype': true,
        'singleReturnOnly': true,
        'classPropertiesAllowed': false,
      },
    ],
  },
};
