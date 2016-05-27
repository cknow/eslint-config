'use strict';

module.exports = {

    // http://eslint.org/docs/rules/#nodejs-and-commonjs
    rules: {
        'callback-return': [2, ['cb', 'callback', 'next', 'done']],
        'global-require': 0,
        'handle-callback-err': [2, '^.*(e|E)rr'],
        'no-mixed-requires': [2, {
            grouping: true,
            allowCall: true
        }],
        'no-new-require': 2,
        'no-path-concat': 2,
        'no-process-env': 0,
        'no-process-exit': 0,
        'no-restricted-modules': 0,
        'no-sync': 0
    }
};
