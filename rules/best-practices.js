'use strict';

module.exports = {

    // http://eslint.org/docs/rules/#best-practices
    rules: {
        'accessor-pairs': ['error', {
            setWithoutGet: true,
            getWithoutSet: false
        }],
        'array-callback-return': 'error',
        'block-scoped-var': 'error',
        'class-methods-use-this': 'off',
        'complexity': ['error', {
            max: 10
        }],
        'consistent-return': 'off',
        'curly': ['error', 'all'],
        'default-case': ['error', {
            commentPattern: ''
        }],
        'dot-location': ['error', 'property'],
        'dot-notation': ['error', {
            allowKeywords: true
        }],
        'eqeqeq': 'error',
        'guard-for-in': 'error',
        'no-alert': 'error',
        'no-caller': 'error',
        'no-case-declarations': 'error',
        'no-div-regex': 'error',
        'no-else-return': 'error',
        'no-empty-function': ['error', {
            allow: []
        }],
        'no-empty-pattern': 'error',
        'no-eq-null': 'error',
        'no-eval': ['error', {
            allowIndirect: false
        }],
        'no-extend-native': ['error', {
            exceptions: []
        }],
        'no-extra-bind': 'error',
        'no-extra-label': 'error',
        'no-fallthrough': ['error', {
            commentPattern: ''
        }],
        'no-floating-decimal': 'error',
        'no-implicit-coercion': ['error', {
            boolean: true,
            number: true,
            string: true,
            allow: []
        }],
        'no-implicit-globals': 'error',
        'no-implied-eval': 'error',
        'no-invalid-this': 'off',
        'no-iterator': 'error',
        'no-labels': ['error', {
            allowLoop: false,
            allowSwitch: false
        }],
        'no-lone-blocks': 'error',
        'no-loop-func': 'error',
        'no-magic-numbers': 'off',
        'no-multi-spaces': ['error', {
            exceptions: {
                Property: true,
                BinaryExpression: false,
                VariableDeclarator: true,
                ImportDeclaration: true
            }
        }],
        'no-multi-str': 'error',
        'no-native-reassign': ['error', {
            exceptions: []
        }],
        'no-new': 'error',
        'no-new-func': 'error',
        'no-new-wrappers': 'error',
        'no-octal': 'error',
        'no-octal-escape': 'error',
        'no-param-reassign': 'off',
        'no-proto': 'error',
        'no-redeclare': ['error', {
            builtinGlobals: false
        }],
        'no-return-assign': ['error', 'always'],
        'no-script-url': 'error',
        'no-self-assign': 'error',
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-throw-literal': 'error',
        'no-unmodified-loop-condition': 'error',
        'no-unused-expressions': ['error', {
            allowShortCircuit: false,
            allowTernary: false
        }],
        'no-unused-labels': 'error',
        'no-useless-call': 'error',
        'no-useless-concat': 'error',
        'no-useless-escape': 'error',
        'no-void': 'error',
        'no-warning-comments': 'off',
        'no-with': 'error',
        'radix': ['error', 'always'],
        'vars-on-top': 'off',
        'wrap-iife': ['error', 'inside'],
        'yoda': ['error', 'never', {
            exceptRange: false,
            onlyEquality: false
        }]
    }
};
