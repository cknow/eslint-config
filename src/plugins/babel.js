'use strict';

module.exports = {
    parser: 'babel-eslint',
    plugins: [
        'babel'
    ],
    rules: {
        'no-var': 2,
        'prefer-arrow-callback': [2, {
            allowNamedFunctions: false,
            allowUnboundThis: true
        }],
        'prefer-const': [2, {destructuring: 'all'}],
        'prefer-rest-params': 2,
        'prefer-template': 2,

        // disable builtin rules that are incompatible with Babel plugin ones
        'generator-star-spacing': 0,
        'new-cap': 0,
        'array-bracket-spacing': 0,
        'object-curly-spacing': 0,
        'object-shorthand': 0,
        'arrow-parens': 0,

        // Babel plugin
        'babel/generator-star-spacing': [2, {
            before: true,
            after: true
        }],
        'babel/new-cap': [2, {
            newIsCap: true,
            capIsNew: true,
            newIsCapExceptions: [],
            capIsNewExceptions: []
        }],
        'babel/array-bracket-spacing': [2, 'never'],
        'babel/object-curly-spacing': [2, 'never'],
        'babel/object-shorthand': [2, 'always'],
        'babel/arrow-parens': [2, 'as-needed'],
        'babel/no-await-in-loop': 2,
        'babel/flow-object-type': [2, 'comma']
    }
};
