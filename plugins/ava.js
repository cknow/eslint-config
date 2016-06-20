'use strict';

module.exports = {
    plugins: [
        'ava'
    ],
    rules: {
        'ava/assertion-arguments': 'error',
        'ava/assertion-message': 'off',
        'ava/max-asserts': 'off',
        'ava/no-cb-test': 'off',
        'ava/no-identical-title': 'error',
        'ava/no-ignored-test-files': 'error',
        'ava/no-invalid-end': 'error',
        'ava/no-only-test': 'error',
        'ava/no-skip-assert': 'error',
        'ava/no-skip-test': 'error',
        'ava/no-statement-after-end': 'error',
        'ava/no-todo-test': 'error',
        'ava/no-unknown-modifiers': 'error',
        'ava/prefer-power-assert': 'off',
        'ava/test-ended': 'error',
        'ava/test-title': ['error', 'if-multiple'],
        'ava/use-t-well': 'error',
        'ava/use-t': 'error',
        'ava/use-test': 'error',
        'ava/use-true-false': 'error'
    }
};
