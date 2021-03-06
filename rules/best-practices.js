module.exports = {

  // http://eslint.org/docs/rules/#best-practices
  rules: {
    'accessor-pairs': ['error', {
      setWithoutGet: true,
      getWithoutSet: false
    }],
    'array-callback-return': ['error', {
      allowImplicit: false
    }],
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
    'default-param-last': 'error',
    'dot-location': ['error', 'property'],
    'dot-notation': ['error', {
      allowKeywords: true
    }],
    'eqeqeq': 'error',
    'grouped-accessor-pairs': ['error', 'getBeforeSet'],
    'guard-for-in': 'error',
    'max-classes-per-file': ['error', 1],
    'no-alert': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-constructor-return': 'error',
    'no-div-regex': 'error',
    'no-else-return': ['error', {
      allowElseIf: true
    }],
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
    'no-global-assign': ['error', {
      exceptions: []
    }],
    'no-implicit-coercion': ['error', {
      boolean: true,
      number: true,
      string: true,
      allow: []
    }],
    'no-implicit-globals': ['error', {
      lexicalBindings: false
    }],
    'no-implied-eval': 'error',
    'no-invalid-this': ['error', {
      capIsConstructor: true
    }],
    'no-iterator': 'error',
    'no-labels': ['error', {
      allowLoop: false,
      allowSwitch: false
    }],
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': ['off', {
      ignore: [],
      ignoreArrayIndexes: false,
      enforceConst: false,
      detectObjects: false
    }],
    'no-multi-spaces': ['error', {
      ignoreEOLComments: false,
      exceptions: {
        Property: false,
        BinaryExpression: false,
        VariableDeclarator: false,
        ImportDeclaration: false
      }
    }],
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': ['off', {
      props: false
    }],
    'no-proto': 'error',
    'no-redeclare': ['error', {
      builtinGlobals: false
    }],
    'no-return-assign': ['error', 'always'],
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-assign': ['error', {
      props: true
    }],
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
    'no-useless-catch': 'error',
    'no-useless-concat': 'error',
    'no-useless-escape': 'error',
    'no-useless-return': 'error',
    'no-void': 'error',
    'no-warning-comments': 'off',
    'no-with': 'error',
    'prefer-promise-reject-errors': ['error', {
      allowEmptyReject: true
    }],
    'prefer-regex-literals': 'error',
    'radix': ['error', 'always'],
    'require-await': 'error',
    'require-unicode-regexp': 'error',
    'vars-on-top': 'off',
    'wrap-iife': ['error', 'inside', {
      functionPrototypeMethods: true
    }],
    'yoda': ['error', 'never', {
      exceptRange: false,
      onlyEquality: false
    }]
  }
}
