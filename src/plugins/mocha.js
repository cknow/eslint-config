'use strict';

module.exports = {
    env: {
        mocha: true
    },
    plugins: [
        'mocha'
    ],
    rules: {
        'mocha/no-exclusive-tests': 2,
        'mocha/no-skipped-tests': 2,
        'mocha/no-pending-tests': 2,
        'mocha/handle-done-callback': 2,
        'mocha/no-synchronous-tests': 2,
        'mocha/no-global-tests': 2
    }
};
