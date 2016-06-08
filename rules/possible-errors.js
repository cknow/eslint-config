'use strict';

module.exports = {

    // http://eslint.org/docs/rules/#possible-errors
    rules: {
        'comma-dangle': [2, 'never'],
        'no-cond-assign': [2, 'except-parens'],
        'no-console': 0,
        'no-constant-condition': 2,
        'no-control-regex': 2,
        'no-debugger': 2,
        'no-dupe-args': 2,
        'no-dupe-keys': 2,
        'no-duplicate-case': 2,
        'no-empty': [2, {allowEmptyCatch: true}],
        'no-empty-character-class': 2,
        'no-ex-assign': 2,
        'no-extra-boolean-cast': 2,
        'no-extra-parens': [2, 'all', {
            conditionalAssign: false,
            returnAssign: false,
            nestedBinaryExpressions: false
        }],
        'no-extra-semi': 2,
        'no-func-assign': 2,
        'no-inner-declarations': [2, 'functions'],
        'no-invalid-regexp': [2, {allowConstructorFlags: []}],
        'no-irregular-whitespace': [2, {
            skipStrings: true,
            skipComments: true,
            skipRegExps: true,
            skipTemplates: true
        }],
        'no-negated-in-lhs': 2,
        'no-obj-calls': 2,
        'no-prototype-builtins': 2,
        'no-regex-spaces': 2,
        'no-sparse-arrays': 2,
        'no-unexpected-multiline': 2,
        'no-unreachable': 2,
        'no-unsafe-finally': 2,
        'use-isnan': 2,
        'valid-jsdoc': [2, {
            requireReturn: true,
            requireParamDescription: true,
            requireReturnDescription: true,
            prefer: {
                returns: 'return'
            }
        }],
        'valid-typeof': 2
    }
};
