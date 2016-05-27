'use strict';

module.exports = {

    // http://eslint.org/docs/rules/#variables
    rules: {
        'init-declarations': 0,
        'no-catch-shadow': 2,
        'no-delete-var': 2,
        'no-label-var': 2,
        'no-restricted-globals': [2, 'event'],
        'no-shadow': [2, {
            builtinGlobals: true,
            hoist: 'functions',
            allow: []
        }],
        'no-shadow-restricted-names': 2,
        'no-undef': [2, {typeof: true}],
        'no-undef-init': 2,
        'no-undefined': 0,
        'no-unused-vars': [2, {
            vars: 'all',
            varsIgnorePattern: '',
            args: 'after-used',
            argsIgnorePattern: '',
            caughtErrors: 'none',
            caughtErrorsIgnorePattern: ''
        }],
        'no-use-before-define': [2, {
            functions: false,
            classes: true
        }]
    }
};
