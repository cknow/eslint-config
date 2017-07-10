'use strict';

module.exports = {

    // http://eslint.org/docs/rules/#possible-errors
    rules: {
        'for-direction': 'error',
        'getter-return': ['error', {
            allowImplicit: false
        }],
        'no-await-in-loop': 'error',
        'no-compare-neg-zero': 'error',
        'no-cond-assign': ['error', 'except-parens'],
        'no-console': 'off',
        'no-constant-condition': 'error',
        'no-control-regex': 'error',
        'no-debugger': 'error',
        'no-dupe-args': 'error',
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',
        'no-empty': ['error', {
            allowEmptyCatch: true
        }],
        'no-empty-character-class': 'error',
        'no-ex-assign': 'error',
        'no-extra-boolean-cast': 'error',
        'no-extra-parens': ['error', 'all', {
            conditionalAssign: false,
            returnAssign: false,
            nestedBinaryExpressions: false,
            ignoreJSX: 'multi-line',
            enforceForArrowConditionals: false
        }],
        'no-extra-semi': 'error',
        'no-func-assign': 'error',
        'no-inner-declarations': ['error', 'functions'],
        'no-invalid-regexp': ['error', {
            allowConstructorFlags: []
        }],
        'no-irregular-whitespace': ['error', {
            skipStrings: true,
            skipComments: true,
            skipRegExps: true,
            skipTemplates: true
        }],
        'no-obj-calls': 'error',
        'no-prototype-builtins': 'error',
        'no-regex-spaces': 'error',
        'no-sparse-arrays': 'error',
        'no-template-curly-in-string': 'error',
        'no-unexpected-multiline': 'error',
        'no-unreachable': 'error',
        'no-unsafe-finally': 'error',
        'no-unsafe-negation': 'error',
        'use-isnan': 'error',
        'valid-jsdoc': ['error', {
            requireReturn: true,
            requireParamDescription: true,
            requireReturnDescription: true,
            prefer: {
                returns: 'return'
            }
        }],
        'valid-typeof': ['error', {
            requireStringLiterals: true
        }]
    }
};
