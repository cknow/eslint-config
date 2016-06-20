'use strict';

module.exports = {
    env: {
        jasmine: true
    },
    plugins: [
        'jasmine'
    ],
    rules: {
        'jasmine/named-spy': 'error',
        'jasmine/no-focused-tests': 'error',
        'jasmine/no-disabled-tests': 'error',
        'jasmine/no-suite-dupes': ['error', 'block'],
        'jasmine/no-spec-dupes': ['error', 'block'],
        'jasmine/missing-expect': 'off',
        'jasmine/no-suite-callback-args': 'error',
        'jasmine/valid-expect': 'error',
        'jasmine/no-assign-spyon': 'error'
    }
};
