'use strict';

module.exports = {
    env: {
        mocha: true
    },
    plugins: [
        'mocha'
    ],
    rules: {
        'mocha/handle-done-callback': 'error',
        'mocha/no-exclusive-tests': 'error',
        'mocha/no-global-tests': 'error',
        'mocha/no-hooks': 'error',
        'mocha/no-hooks-for-single-case': 'error',
        'mocha/no-mocha-arrows': 'off',
        'mocha/no-pending-tests': 'error',
        'mocha/no-return-and-callback': 'error',
        'mocha/no-sibling-hooks': 'error',
        'mocha/no-skipped-tests': 'error',
        'mocha/no-synchronous-tests': 'error',
        'mocha/no-top-level-hooks': 'off',
        'mocha/valid-suite-description': 'off',
        'mocha/valid-test-description': 'off'
    }
};
