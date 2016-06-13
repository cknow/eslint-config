'use strict';

module.exports = {

    // http://eslint.org/docs/rules/#best-practices
    rules: {
        'accessor-pairs': [2, {
            setWithoutGet: true,
            getWithoutSet: false
        }],
        'array-callback-return': 2,
        'block-scoped-var': 2,
        'complexity': 0,
        'consistent-return': 0,
        'curly': [2, 'all'],
        'default-case': [2, {
            commentPattern: ''
        }],
        'dot-location': [2, 'property'],
        'dot-notation': [2, {
            allowKeywords: true
        }],
        'eqeqeq': 2,
        'guard-for-in': 2,
        'no-alert': 2,
        'no-caller': 2,
        'no-case-declarations': 2,
        'no-div-regex': 2,
        'no-else-return': 2,
        'no-empty-function': 0,
        'no-empty-pattern': 2,
        'no-eq-null': 2,
        'no-eval': [2, {
            allowIndirect: false
        }],
        'no-extend-native': [2, {
            exceptions: []
        }],
        'no-extra-bind': 2,
        'no-extra-label': 2,
        'no-fallthrough': [2, {
            commentPattern: ''
        }],
        'no-floating-decimal': 2,
        'no-implicit-coercion': [2, {
            boolean: true,
            number: true,
            string: true,
            allow: []
        }],
        'no-implicit-globals': 2,
        'no-implied-eval': 2,
        'no-invalid-this': 0,
        'no-iterator': 2,
        'no-labels': [2, {
            allowLoop: false,
            allowSwitch: false
        }],
        'no-lone-blocks': 2,
        'no-loop-func': 2,
        'no-magic-numbers': 0,
        'no-multi-spaces': [2, {
            exceptions: {
                Property: true,
                BinaryExpression: false,
                VariableDeclarator: true,
                ImportDeclaration: true
            }
        }],
        'no-multi-str': 2,
        'no-native-reassign': [2, {
            exceptions: []
        }],
        'no-new': 2,
        'no-new-func': 2,
        'no-new-wrappers': 2,
        'no-octal': 2,
        'no-octal-escape': 2,
        'no-param-reassign': 0,
        'no-proto': 2,
        'no-redeclare': [2, {
            builtinGlobals: false
        }],
        'no-return-assign': [2, 'always'],
        'no-script-url': 2,
        'no-self-assign': 2,
        'no-self-compare': 2,
        'no-sequences': 2,
        'no-throw-literal': 2,
        'no-unmodified-loop-condition': 2,
        'no-unused-expressions': [2, {
            allowShortCircuit: false,
            allowTernary: false
        }],
        'no-unused-labels': 2,
        'no-useless-call': 2,
        'no-useless-concat': 2,
        'no-useless-escape': 2,
        'no-void': 2,
        'no-warning-comments': 0,
        'no-with': 2,
        'radix': [2, 'always'],
        'vars-on-top': 0,
        'wrap-iife': [2, 'inside'],
        'yoda': [2, 'never', {
            exceptRange: false,
            onlyEquality: false
        }]
    }
};
