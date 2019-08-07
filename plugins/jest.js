'use strict';

module.exports = {
    env: {
        'jest/globals': true
    },
    plugins: [
        'jest'
    ],
    rules: {
        'jest/consistent-test-it': ['error', {
            fn: 'test'
        }],
        'jest/expect-expect': ['error', {
            assertFunctionNames: ['expect']
        }],
        'jest/lowercase-name': ['error', {
            ignore: []
        }],
        'jest/no-alias-methods': 'error',
        'jest/no-commented-out-tests': 'error',
        'jest/no-disabled-tests': 'error',
        'jest/no-duplicate-hooks': 'error',
        'jest/no-empty-title': 'error',
        'jest/no-expect-resolves': 'error',
        'jest/no-export': 'error',
        'jest/no-focused-tests': 'error',
        'jest/no-hooks': ['error', {
            allow: [
                'beforeAll',
                'beforeEach',
                'afterAll',
                'afterEach'
            ]
        }],
        'jest/no-identical-title': 'error',
        'jest/no-if': 'error',
        'jest/no-jasmine-globals': 'error',
        'jest/no-jest-import': 'error',
        'jest/no-large-snapshots': ['error', {
            maxSize: 50
        }],
        'jest/no-mocks-import': 'error',
        'jest/no-standalone-expect': 'error',
        'jest/no-test-callback': 'error',
        'jest/no-test-prefixes': 'error',
        'jest/no-test-return-statement': 'error',
        'jest/no-truthy-falsy': 'error',
        'jest/no-try-expect': 'error',
        'jest/prefer-called-with': 'error',
        'jest/prefer-expect-assertions': 'error',
        'jest/prefer-inline-snapshots': 'error',
        'jest/prefer-spy-on': 'error',
        'jest/prefer-strict-equal': 'error',
        'jest/prefer-to-be-null': 'error',
        'jest/prefer-to-be-undefined': 'error',
        'jest/prefer-to-contain': 'error',
        'jest/prefer-to-have-length': 'error',
        'jest/require-tothrow-message': 'error',
        'jest/valid-describe': 'error',
        'jest/valid-expect-in-promise': 'error',
        'jest/valid-expect': 'error'
    }
};
