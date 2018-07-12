'use strict';

module.exports = {
    env: {
        mocha: true
    },
    plugins: [
        'mocha'
    ],
    rules: {
        'prefer-arrow-callback': 'off',
        'mocha/handle-done-callback': 'error',
        'mocha/max-top-level-suites': 'error',
        'mocha/no-exclusive-tests': 'error',
        'mocha/no-global-tests': 'error',
        'mocha/no-hooks': 'error',
        'mocha/no-hooks-for-single-case': 'error',
        'mocha/no-identical-title': 'error',
        'mocha/no-mocha-arrows': 'error',
        'mocha/no-nested-tests': 'error',
        'mocha/no-pending-tests': 'error',
        'mocha/no-return-and-callback': 'error',
        'mocha/no-setup-in-describe': 'error',
        'mocha/no-sibling-hooks': 'error',
        'mocha/no-skipped-tests': 'error',
        'mocha/no-synchronous-tests': 'error',
        'mocha/no-top-level-hooks': 'error',
        'mocha/prefer-arrow-callback': 'error',
        'mocha/valid-suite-description': ['error', '^[A-Z]'],
        'mocha/valid-test-description': ['error', '^[A-Z]', ['it', 'specify', 'test']]
    }
};
