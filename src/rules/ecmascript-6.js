'use strict';

module.exports = {

    // http://eslint.org/docs/rules/#ecmascript-6
    rules: {
        'arrow-body-style': [2, 'as-needed'],
        'arrow-parens': [2, 'as-needed'],
        'arrow-spacing': [2, {
            before: true,
            after: true
        }],
        'constructor-super': 2,
        'generator-star-spacing': [2, {
            before: true,
            after: true
        }],
        'no-class-assign': 2,
        'no-confusing-arrow': 0,
        'no-const-assign': 2,
        'no-dupe-class-members': 2,
        'no-duplicate-imports': [2, {includeExports: true}],
        'no-new-symbol': 2,
        'no-restricted-imports': 0,
        'no-this-before-super': 2,
        'no-useless-computed-key': 2,
        'no-useless-constructor': 2,
        'no-var': 0,
        'object-shorthand': [2, 'always', {
            avoidQuotes: false,
            ignoreConstructors: false
        }],
        'prefer-arrow-callback': 0,
        'prefer-const': 0,
        'prefer-reflect': 0,
        'prefer-rest-params': 0,
        'prefer-spread': 0,
        'prefer-template': 0,
        'require-yield': 2,
        'sort-imports': 0,
        'template-curly-spacing': [2, 'never'],
        'yield-star-spacing': [2, {
            before: true,
            after: true
        }]
    }
};
