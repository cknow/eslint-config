module.exports = {
  parser: require.resolve('vue-eslint-parser'),
  parserOptions: {
    parser: 'babel-eslint'
  },
  plugins: [
    'vue'
  ],
  rules: {
    'vue/array-bracket-spacing': ['error', 'never'],
    'vue/arrow-spacing': ['error', {
      before: true,
      after: true
    }],
    'vue/attribute-hyphenation': ['error', 'always'],
    'vue/attributes-order': ['error', {
      order: [
        'DEFINITION',
        'LIST_RENDERING',
        'CONDITIONALS',
        'RENDER_MODIFIERS',
        'GLOBAL',
        'UNIQUE',
        'TWO_WAY_BINDING',
        'OTHER_DIRECTIVES',
        'OTHER_ATTR',
        'EVENTS',
        'CONTENT'
      ]
    }],
    'vue/block-spacing': ['error', 'always'],
    'vue/brace-style': ['error', '1tbs', {
      allowSingleLine: false
    }],
    'vue/camelcase': ['error', {
      properties: 'always',
      ignoreDestructuring: false,
      allow: []
    }],
    'vue/comma-dangle': ['error', 'never'],
    'vue/comment-directive': 'error',
    'vue/component-name-in-template-casing': ['error', 'PascalCase', {
      registeredComponentsOnly: true,
      ignores: []
    }],
    'vue/eqeqeq': 'error',
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'always'
    }],
    'vue/html-closing-bracket-spacing': ['error', {
      startTag: 'never',
      endTag: 'never',
      selfClosingTag: 'always'
    }],
    'vue/html-end-tags': 'error',
    'vue/html-indent': ['error', 2, {
      attribute: 1,
      baseIndent: 1,
      closeBracket: 0,
      alignAttributesVertically: true,
      ignores: []
    }],
    'vue/html-quotes': ['error', 'double'],
    'vue/html-self-closing': ['error', {
      html: {
        void: 'never',
        normal: 'always',
        component: 'always'
      },
      svg: 'always',
      math: 'always'
    }],
    'vue/jsx-uses-vars': 'error',
    'vue/key-spacing': ['error', {
      beforeColon: false,
      afterColon: true
    }],
    'vue/match-component-file-name': ['error', {
      extensions: ['jsx'],
      shouldMatchCase: false
    }],
    'vue/max-attributes-per-line': ['error', {
      singleline: 4,
      multiline: {
        max: 1,
        allowFirstLine: false
      }
    }],
    'vue/multiline-html-element-content-newline': ['error', {
      ignoreWhenEmpty: true,
      ignores: ['pre', 'textarea'],
      allowEmptyLines: false
    }],
    'vue/mustache-interpolation-spacing': ['error', 'always'],
    'vue/name-property-casing': ['error', 'PascalCase'],
    'vue/no-async-in-computed-properties': 'error',
    'vue/no-boolean-default': ['error', 'no-default'],
    'vue/no-confusing-v-for-v-if': 'error',
    'vue/no-dupe-keys': ['error', {
      groups: []
    }],
    'vue/no-duplicate-attributes': ['error', {
      allowCoexistClass: true,
      allowCoexistStyle: true
    }],
    'vue/no-multi-spaces': ['error', {
      ignoreProperties: false
    }],
    'vue/no-parsing-error': ['error', {
      'abrupt-closing-of-empty-comment': true,
      'absence-of-digits-in-numeric-character-reference': true,
      'cdata-in-html-content': true,
      'character-reference-outside-unicode-range': true,
      'control-character-in-input-stream': true,
      'control-character-reference': true,
      'eof-before-tag-name': true,
      'eof-in-cdata': true,
      'eof-in-comment': true,
      'eof-in-tag': true,
      'incorrectly-closed-comment': true,
      'incorrectly-opened-comment': true,
      'invalid-first-character-of-tag-name': true,
      'missing-attribute-value': true,
      'missing-end-tag-name': true,
      'missing-semicolon-after-character-reference': true,
      'missing-whitespace-between-attributes': true,
      'nested-comment': true,
      'noncharacter-character-reference': true,
      'noncharacter-in-input-stream': true,
      'null-character-reference': true,
      'surrogate-character-reference': true,
      'surrogate-in-input-stream': true,
      'unexpected-character-in-attribute-name': true,
      'unexpected-character-in-unquoted-attribute-value': true,
      'unexpected-equals-sign-before-attribute-name': true,
      'unexpected-null-character': true,
      'unexpected-question-mark-instead-of-tag-name': true,
      'unexpected-solidus-in-tag': true,
      'unknown-named-character-reference': true,
      'end-tag-with-attributes': true,
      'duplicate-attribute': true,
      'end-tag-with-trailing-solidus': true,
      'non-void-html-element-start-tag-with-trailing-solidus': false,
      'x-invalid-end-tag': true,
      'x-invalid-namespace': true
    }],
    'vue/no-reserved-keys': ['error', {
      reserved: [],
      groups: []
    }],
    'vue/no-restricted-syntax': ['error', 'WithStatement'],
    'vue/no-shared-component-data': 'error',
    'vue/no-side-effects-in-computed-properties': 'error',
    'vue/no-spaces-around-equal-signs-in-attribute': 'error',
    'vue/no-template-key': 'error',
    'vue/no-template-shadow': 'error',
    'vue/no-textarea-mustache': 'error',
    'vue/no-unused-components': ['error', {
      ignoreWhenBindingPresent: true
    }],
    'vue/no-unused-vars': 'error',
    'vue/no-use-v-if-with-v-for': ['error', {
      allowUsingIterationVar: true
    }],
    'vue/no-v-html': 'error',
    'vue/object-curly-spacing': ['error', 'always', {
      arraysInObjects: true,
      objectsInObjects: true
    }],
    'vue/order-in-components': ['error', {
      order: [
        'el',
        'name',
        'parent',
        'functional',
        ['delimiters', 'comments'],
        ['components', 'directives', 'filters'],
        'extends',
        'mixins',
        'inheritAttrs',
        'model',
        ['props', 'propsData'],
        'data',
        'computed',
        'watch',
        'LIFECYCLE_HOOKS',
        'methods',
        ['template', 'render'],
        'renderError'
      ]
    }],
    'vue/prop-name-casing': ['error', 'camelCase'],
    'vue/require-component-is': 'error',
    'vue/require-default-prop': 'error',
    'vue/require-direct-export': 'error',
    'vue/require-prop-types': 'error',
    'vue/require-prop-type-constructor': 'error',
    'vue/require-render-return': 'error',
    'vue/require-v-for-key': 'error',
    'vue/require-valid-default-prop': 'error',
    'vue/return-in-computed-property': ['error', {
      treatUndefinedAsUnspecified: true
    }],
    'vue/script-indent': ['error', 2, {
      baseIndent: 0,
      switchCase: 1,
      ignores: []
    }],
    'vue/singleline-html-element-content-newline': ['error', {
      ignoreWhenNoAttributes: true,
      ignoreWhenEmpty: true,
      ignores: ['pre', 'textarea']
    }],
    'vue/space-infix-ops': ['error', {
      int32Hint: false
    }],
    'vue/space-unary-ops': ['error', {
      words: true,
      nonwords: false,
      overrides: {}
    }],
    'vue/this-in-template': ['error', 'never'],
    'vue/use-v-on-exact': 'error',
    'vue/v-bind-style': ['error', 'shorthand'],
    'vue/v-on-function-call': ['error', 'never'],
    'vue/v-on-style': ['error', 'shorthand'],
    'vue/valid-template-root': 'error',
    'vue/valid-v-bind': 'error',
    'vue/valid-v-cloak': 'error',
    'vue/valid-v-else-if': 'error',
    'vue/valid-v-else': 'error',
    'vue/valid-v-for': 'error',
    'vue/valid-v-html': 'error',
    'vue/valid-v-if': 'error',
    'vue/valid-v-model': 'error',
    'vue/valid-v-on': ['error', {
      modifiers: []
    }],
    'vue/valid-v-once': 'error',
    'vue/valid-v-pre': 'error',
    'vue/valid-v-show': 'error',
    'vue/valid-v-text': 'error'
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off'
      }
    }
  ]
}
