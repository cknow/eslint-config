'use strict';

module.exports = {
    extends: require.resolve('./index.js'),
    rules: {
        'no-var': 'error',
        'prefer-arrow-callback': ['error', {
            allowNamedFunctions: false,
            allowUnboundThis: true
        }],
        'prefer-const': ['error', {
            destructuring: 'all'
        }],
        'prefer-destructuring': ['error', {
            array: true,
            object: true
        }, {
            enforceForRenamedProperties: false
        }],
        'prefer-numeric-literals': 'error',
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'prefer-template': 'error'
    }
};
