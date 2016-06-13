'use strict';

module.exports = {

    // http://eslint.org/docs/rules/#stylistic-issues
    rules: {
        'array-bracket-spacing': [2, 'never'],
        'block-spacing': [2, 'always'],
        'brace-style': [2, '1tbs', {allowSingleLine: false}],
        'camelcase': [2, {properties: 'always'}],
        'comma-spacing': [2, {
            before: false,
            after: true
        }],
        'comma-style': [2, 'last'],
        'computed-property-spacing': [2, 'never'],
        'consistent-this': 0,
        'eol-last': [2, 'unix'],
        'func-names': 0,
        'func-style': 0,
        'id-blacklist': 0,
        'id-length': 0,
        'id-match': 0,
        'indent': [2, 4, {
            SwitchCase: 1,
            VariableDeclarator: 1
        }],
        'jsx-quotes': [2, 'prefer-double'],
        'key-spacing': [2, {
            beforeColon: false,
            afterColon: true
        }],
        'keyword-spacing': [2, {
            before: true,
            after: true,
            overrides: {}
        }],
        'linebreak-style': [2, 'unix'],
        'lines-around-comment': 0,
        'max-depth': [2, 4],
        'max-len': [2, 120, 4, {
            ignorePattern: '',
            ignoreComments: true,
            ignoreTrailingComments: false,
            ignoreUrls: true
        }],
        'max-nested-callbacks': [2, 4],
        'max-params': 0,
        'max-statements': 0,
        'max-statements-per-line': [2, {max: 1}],
        'new-cap': [2, {
            newIsCap: true,
            capIsNew: true,
            newIsCapExceptions: [],
            capIsNewExceptions: [],
            properties: true
        }],
        'new-parens': 2,
        'newline-after-var': [2, 'always'],
        'newline-before-return': 2,
        'newline-per-chained-call': [2, {ignoreChainWithDepth: 2}],
        'no-array-constructor': 2,
        'no-bitwise': 0,
        'no-continue': 0,
        'no-inline-comments': 0,
        'no-lonely-if': 2,
        'no-mixed-spaces-and-tabs': 2,
        'no-multiple-empty-lines': [2, {max: 1}],
        'no-negated-condition': 2,
        'no-nested-ternary': 2,
        'no-new-object': 2,
        'no-plusplus': 0,
        'no-restricted-syntax': [2, 'WithStatement'],
        'no-spaced-func': 2,
        'no-ternary': 0,
        'no-trailing-spaces': 2,
        'no-underscore-dangle': [2, {
            allow: [],
            allowAfterThis: false
        }],
        'no-unneeded-ternary': 2,
        'no-whitespace-before-property': 2,
        'object-curly-spacing': [2, 'never'],
        'object-property-newline': [2, {allowMultiplePropertiesPerLine: false}],
        'one-var': [2, 'never'],
        'one-var-declaration-per-line': 2,
        'operator-assignment': [2, 'always'],
        'operator-linebreak': [2, 'after', {overrides: {}}],
        'padded-blocks': [2, 'never'],
        'quote-props': [2, 'consistent-as-needed'],
        'quotes': [2, 'single', {
            avoidEscape: false,
            allowTemplateLiterals: true
        }],
        'require-jsdoc': [2, {
            require: {
                FunctionDeclaration: true,
                MethodDefinition: true,
                ClassDeclaration: true
            }
        }],
        'semi': [2, 'always', {omitLastInOneLineBlock: false}],
        'semi-spacing': [2, {
            before: false,
            after: true
        }],
        'sort-vars': 0,
        'space-before-blocks': [2, 'always'],
        'space-before-function-paren': [2, {
            anonymous: 'never',
            named: 'never'
        }],
        'space-in-parens': [2, 'never', {exceptions: []}],
        'space-infix-ops': [2, {int32Hint: false}],
        'space-unary-ops': 2,
        'spaced-comment': [2, 'always', {
            line: {
                exceptions: ['-']
            },
            block: {
                markers: ['!']
            }
        }],
        'unicode-bom': [2, 'never'],
        'wrap-regex': 0
    }
};
