'use strict';

module.exports = {

    // http://eslint.org/docs/rules/#stylistic-issues
    rules: {
        'array-bracket-newline': ['error', 'consistent'],
        'array-bracket-spacing': ['error', 'never'],
        'array-element-newline': 'off',
        'block-spacing': ['error', 'always'],
        'brace-style': ['error', '1tbs', {
            allowSingleLine: false
        }],
        'camelcase': ['error', {
            properties: 'always'
        }],
        'capitalized-comments': ['error', 'always', {
            ignorePattern: 'pragma|ignore',
            ignoreInlineComments: true,
            ignoreConsecutiveComments: true
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
        'func-call-spacing': ['error', 'never'],
        'func-name-matching': 'error',
        'func-names': ['error', 'never'],
        'func-style': 'off',
        'function-paren-newline': ['error', 'multiline'],
        'id-blacklist': 'off',
        'id-length': 'off',
        'id-match': 'off',
        'indent': ['error', 4, {
            SwitchCase: 1,
            VariableDeclarator: {
                var: 1,
                let: 1,
                const: 1
            },
            outerIIFEBody: 1,
            MemberExpression: 1,
            FunctionDeclaration: {
                parameters: 1,
                body: 1
            },
            FunctionExpression: {
                parameters: 1,
                body: 1
            },
            CallExpression: {
                arguments: 1
            },
            ArrayExpression: 1,
            ObjectExpression: 1,
            ImportDeclaration: 1,
            flatTernaryExpressions: false
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
        'lines-between-class-members': ['error', 'always', {
            exceptAfterSingleLine: false
        }],
        'max-depth': ['error', {
            max: 4
        }],
        'max-len': ['error', 120, 4, {
            ignorePattern: '',
            ignoreComments: true,
            ignoreTrailingComments: true,
            ignoreUrls: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
            ignoreRegExpLiterals: true
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
        'multiline-comment-style': ['error', 'starred-block'],
        'multiline-ternary': ['error', 'always-multiline'],
        'new-cap': ['error', {
            newIsCap: true,
            capIsNew: true,
            newIsCapExceptions: [],
            capIsNewExceptions: [],
            properties: true
        }],
        'new-parens': 'error',
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
        'no-multi-assign': 'error',
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
        'no-tabs': 'error',
        'no-ternary': 'off',
        'no-trailing-spaces': ['error', {
            skipBlankLines: false,
            ignoreComments: true
        }],
        'no-underscore-dangle': ['error', {
            allow: [],
            allowAfterThis: false,
            allowAfterSuper: false,
            enforceInMethodNames: false
        }],
        'no-unneeded-ternary': ['error', {
            defaultAssignment: false
        }],
        'no-whitespace-before-property': 'error',
        'nonblock-statement-body-position': 'off',
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
        'one-var': ['error', {
            var: 'never',
            let: 'never',
            const: 'never'
        }],
        'one-var-declaration-per-line': ['error', 'always'],
        'operator-assignment': ['error', 'always'],
        'operator-linebreak': ['error', 'after', {
            overrides: {}
        }],
        'padded-blocks': ['error', {
            blocks: 'never',
            classes: 'never',
            switches: 'never'
        }],
        'padding-line-between-statements': [
            'error',
            {
                blankLine: 'always',
                prev: ['const', 'let', 'var'],
                next: '*'
            },
            {
                blankLine: 'any',
                prev: ['const', 'let', 'var'],
                next: ['const', 'let', 'var']
            },
            {
                blankLine: 'always',
                prev: 'directive',
                next: '*'
            },
            {
                blankLine: 'any',
                prev: 'directive',
                next: 'directive'
            },
            {
                blankLine: 'always',
                prev: 'import',
                next: '*'
            },
            {
                blankLine: 'any',
                prev: 'import',
                next: 'import'
            },
            {
                blankLine: 'always',
                prev: 'export',
                next: '*'
            },
            {
                blankLine: 'any',
                prev: 'export',
                next: 'export'
            },
            {
                blankLine: 'always',
                prev: '*',
                next: ['do', 'for', 'function', 'if', 'return', 'switch', 'try', 'while']
            }
        ],
        'quote-props': ['error', 'consistent-as-needed', {
            keywords: false
        }],
        'quotes': ['error', 'single', {
            avoidEscape: false,
            allowTemplateLiterals: true
        }],
        'require-jsdoc': ['error', {
            require: {
                FunctionDeclaration: true,
                ClassDeclaration: true,
                MethodDefinition: true,
                ArrowFunctionExpression: true,
                FunctionExpression: true
            }
        }],
        'semi': ['error', 'always', {
            omitLastInOneLineBlock: true
        }],
        'semi-spacing': ['error', {
            before: false,
            after: true
        }],
        'semi-style': ['error', 'last'],
        'sort-keys': ['off', 'asc', {
            caseSensitive: true,
            natural: true
        }],
        'sort-vars': ['off', {
            ignoreCase: false
        }],
        'space-before-blocks': ['error', 'always'],
        'space-before-function-paren': ['error', {
            anonymous: 'never',
            named: 'never',
            asyncArrow: 'always'
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
                exceptions: ['-', '+', '*'],
                markers: ['!', '/']
            },
            block: {
                exceptions: ['-', '+', '*'],
                markers: ['!', '*'],
                balanced: true
            }
        }],
        'switch-colon-spacing': ['error', {
            after: true,
            before: false
        }],
        'template-tag-spacing': ['error', 'always'],
        'unicode-bom': ['error', 'never'],
        'wrap-regex': 'off'
    }
};
