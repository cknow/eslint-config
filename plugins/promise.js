'use strict';

module.exports = {
    plugins: [
        'promise'
    ],
    rules: {
        'promise/always-return': 'error',
        'promise/no-return-wrap': 'error',
        'promise/param-names': 'error',
        'promise/catch-or-return': 'error',
        'promise/no-native': 'off',
        'promise/no-nesting': 'error',
        'promise/no-promise-in-callback': 'error',
        'promise/no-callback-in-promise': 'error',
        'promise/avoid-new': 'error',
        'promise/no-new-statics': 'error',
        'promise/no-return-in-finally': 'error'
    }
};
