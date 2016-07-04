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
        'mocha/no-pending-tests': 'error',
        'mocha/no-skipped-tests': 'error',
        'mocha/no-synchronous-tests': 'error',
        'mocha/valid-suite-description': 'off',
        'mocha/valid-test-description': 'off'
    }
};
