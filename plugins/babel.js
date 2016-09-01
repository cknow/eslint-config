'use strict';

module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
        allowImportExportEverywhere: false
    },
    plugins: [
        'babel'
    ],
    rules: {
        'no-var': 'error',
        'prefer-arrow-callback': ['error', {
            allowNamedFunctions: false,
            allowUnboundThis: true
        }],
        'prefer-const': ['error', {
            destructuring: 'all'
        }],
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'prefer-template': 'error',

        // disable builtin rules that are incompatible with Babel plugin ones
        'array-bracket-spacing': 'off',
        'arrow-parens': 'off',
        'generator-star-spacing': 'off',
        'new-cap': 'off',
        'object-curly-spacing': 'off',
        'object-shorthand': 'off',

        // Babel plugin
        'babel/array-bracket-spacing': ['error', 'never'],
        'babel/arrow-parens': ['error', 'as-needed'],
        'babel/flow-object-type': ['error', 'comma'],
        'babel/func-params-comma-dangle': ['error', 'never'],
        'babel/generator-star-spacing': ['error', {
            before: true,
            after: true
        }],
        'babel/new-cap': ['error', {
            newIsCap: true,
            capIsNew: true,
            newIsCapExceptions: [],
            capIsNewExceptions: []
        }],
        'babel/no-await-in-loop': 'error',
        'babel/object-curly-spacing': ['error', 'never'],
        'babel/object-shorthand': ['error', 'always']
    }
};
