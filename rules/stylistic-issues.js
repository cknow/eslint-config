'use strict';

module.exports = {

    // http://eslint.org/docs/rules/#stylistic-issues
    rules: {
        'array-bracket-spacing': ['error', 'never'],
        'block-spacing': ['error', 'always'],
        'brace-style': ['error', '1tbs', {
            allowSingleLine: false
        }],
        'camelcase': ['error', {
            properties: 'always'
        }],
        'comma-dangle': ['error', 'never'],
        'comma-spacing': ['error', {
            before: false,
            after: true
        }],
        'comma-style': ['error', 'last', {
            exceptions: {
                ArrayExpression: false,
                ObjectExpression: false,
                VariableDeclaration: false
            }
        }],
        'computed-property-spacing': ['error', 'never'],
        'consistent-this': 'off',
        'eol-last': ['error', 'unix'],
        'func-names': ['error', 'never'],
        'func-style': 'off',
        'id-blacklist': 'off',
        'id-length': 'off',
        'id-match': 'off',
        'indent': ['error', 4, {
            SwitchCase: 1,
            VariableDeclarator: 1
        }],
        'jsx-quotes': ['error', 'prefer-double'],
        'key-spacing': ['error', {
            beforeColon: false,
            afterColon: true
        }],
        'keyword-spacing': ['error', {
            before: true,
            after: true,
            overrides: {}
        }],
        'linebreak-style': ['error', 'unix'],
        'lines-around-comment': ['error', {
            beforeBlockComment: true,
            afterBlockComment: false,
            beforeLineComment: true,
            afterLineComment: false,
            allowBlockStart: false,
            allowBlockEnd: false,
            allowObjectStart: false,
            allowObjectEnd: false,
            allowArrayStart: false,
            allowArrayEnd: false
        }],
        'max-depth': ['error', {
            max: 4
        }],
        'max-len': ['error', 120, 4, {
            ignorePattern: '',
            ignoreComments: true,
            ignoreTrailingComments: false,
            ignoreUrls: true
        }],
        'max-lines': ['error', {
            max: 300,
            skipBlankLines: true,
            skipComments: true
        }],
        'max-nested-callbacks': ['error', {
            max: 4
        }],
        'max-params': ['error', {
            max: 4
        }],
        'max-statements': 'off',
        'max-statements-per-line': ['error', {
            max: 1
        }],
        'multiline-ternary': ['error', 'never'],
        'new-cap': ['error', {
            newIsCap: true,
            capIsNew: true,
            newIsCapExceptions: [],
            capIsNewExceptions: [],
            properties: true
        }],
        'new-parens': 'error',
        'newline-after-var': ['error', 'always'],
        'newline-before-return': 'error',
        'newline-per-chained-call': ['error', {
            ignoreChainWithDepth: 2
        }],
        'no-array-constructor': 'error',
        'no-bitwise': 'off',
        'no-continue': 'off',
        'no-inline-comments': 'off',
        'no-lonely-if': 'error',
        'no-mixed-operators': 'error',
        'no-mixed-spaces-and-tabs': 'error',
        'no-multiple-empty-lines': ['error', {
            max: 1
        }],
        'no-negated-condition': 'error',
        'no-nested-ternary': 'error',
        'no-new-object': 'error',
        'no-plusplus': ['off', {
            allowForLoopAfterthoughts: true
        }],
        'no-restricted-syntax': ['error', 'WithStatement'],
        'no-spaced-func': 'error',
        'no-ternary': 'off',
        'no-trailing-spaces': ['error', {
            skipBlankLines: false
        }],
        'no-underscore-dangle': ['error', {
            allow: [],
            allowAfterThis: false,
            allowAfterSuper: false
        }],
        'no-unneeded-ternary': ['error', {
            defaultAssignment: false
        }],
        'no-whitespace-before-property': 'error',
        'object-curly-newline': ['error', {
            multiline: true,
            minProperties: 1
        }],
        'object-curly-spacing': ['error', 'never', {
            arraysInObjects: true,
            objectsInObjects: true
        }],
        'object-property-newline': ['error', {
            allowMultiplePropertiesPerLine: false
        }],
        'one-var': ['error', 'never'],
        'one-var-declaration-per-line': 'error',
        'operator-assignment': ['error', 'always'],
        'operator-linebreak': ['error', 'after', {
            overrides: {}
        }],
        'padded-blocks': ['error', {
            blocks: 'never',
            classes: 'never',
            switches: 'never'
        }],
        'quote-props': ['error', 'consistent-as-needed'],
        'quotes': ['error', 'single', {
            avoidEscape: false,
            allowTemplateLiterals: true
        }],
        'require-jsdoc': ['error', {
            require: {
                FunctionDeclaration: true,
                MethodDefinition: true,
                ClassDeclaration: true
            }
        }],
        'semi': ['error', 'always', {
            omitLastInOneLineBlock: true
        }],
        'semi-spacing': ['error', {
            before: false,
            after: true
        }],
        'sort-vars': 'off',
        'space-before-blocks': ['error', 'always'],
        'space-before-function-paren': ['error', {
            anonymous: 'never',
            named: 'never'
        }],
        'space-in-parens': ['error', 'never', {
            exceptions: []
        }],
        'space-infix-ops': ['error', {
            int32Hint: false
        }],
        'space-unary-ops': ['error', {
            words: true,
            nonwords: false,
            overrides: {}
        }],
        'spaced-comment': ['error', 'always', {
            line: {
                exceptions: ['-']
            },
            block: {
                markers: ['!'],
                balanced: true
            }
        }],
        'unicode-bom': ['error', 'never'],
        'wrap-regex': 'off'
    }
};
