'use strict';

module.exports = {
    env: {
        jasmine: true
    },
    plugins: [
        'jasmine'
    ],
    rules: {
        'jasmine/named-spy': 2,
        'jasmine/no-focused-tests': 2,
        'jasmine/no-disabled-tests': 2,
        'jasmine/no-suite-dupes': [2, 'block'],
        'jasmine/no-spec-dupes': [2, 'block'],
        'jasmine/missing-expect': 0,
        'jasmine/no-suite-callback-args': 2,
        'jasmine/valid-expect': 2,
        'jasmine/no-assign-spyon': 2
    }
};
