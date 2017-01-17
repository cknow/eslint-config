'use strict';

module.exports = {
    env: {
        jasmine: true
    },
    plugins: [
        'jasmine'
    ],
    rules: {
        'jasmine/missing-expect': 'off',
        'jasmine/named-spy': 'error',
        'jasmine/no-assign-spyon': 'error',
        'jasmine/no-disabled-tests': 'error',
        'jasmine/no-expect-in-setup-teardown': ['error', 'expect()'],
        'jasmine/no-focused-tests': 'error',
        'jasmine/no-global-setup': 'error',
        'jasmine/no-spec-dupes': ['error', 'block'],
        'jasmine/no-suite-callback-args': 'error',
        'jasmine/no-suite-dupes': ['error', 'block'],
        'jasmine/no-unsafe-spy': 'error',
        'jasmine/valid-expect': 'error'
    }
};
