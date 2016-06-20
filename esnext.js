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
        'prefer-rest-params': 'error',
        'prefer-template': 'error'
    }
};
