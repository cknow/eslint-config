'use strict';

module.exports = {

    // http://eslint.org/docs/rules/#variables
    rules: {
        'init-declarations': 'off',
        'no-catch-shadow': 'error',
        'no-delete-var': 'error',
        'no-label-var': 'error',
        'no-restricted-globals': ['error', 'event'],
        'no-shadow': ['error', {
            builtinGlobals: true,
            hoist: 'functions',
            allow: []
        }],
        'no-shadow-restricted-names': 'error',
        'no-undef': ['error', {
            typeof: true
        }],
        'no-undef-init': 'error',
        'no-undefined': 'off',
        'no-unused-vars': ['error', {
            vars: 'all',
            varsIgnorePattern: '',
            args: 'after-used',
            argsIgnorePattern: '',
            caughtErrors: 'none',
            caughtErrorsIgnorePattern: ''
        }],
        'no-use-before-define': ['error', {
            functions: false,
            classes: true
        }]
    }
};
