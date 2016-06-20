'use strict';

module.exports = {
    parser: 'babel-eslint',
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
        'prefer-template': 'error',

        // disable builtin rules that are incompatible with Babel plugin ones
        'generator-star-spacing': 'off',
        'new-cap': 'off',
        'array-bracket-spacing': 'off',
        'object-curly-spacing': 'off',
        'object-shorthand': 'off',
        'arrow-parens': 'off',

        // Babel plugin
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
        'babel/array-bracket-spacing': ['error', 'never'],
        'babel/object-curly-spacing': ['error', 'never'],
        'babel/object-shorthand': ['error', 'always'],
        'babel/arrow-parens': ['error', 'as-needed'],
        'babel/no-await-in-loop': 'error',
        'babel/flow-object-type': ['error', 'comma']
    }
};
