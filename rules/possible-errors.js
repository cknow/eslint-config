module.exports = {

  // http://eslint.org/docs/rules/#possible-errors
  rules: {
    'for-direction': 'error',
    'getter-return': ['error', {
      allowImplicit: false
    }],
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': ['error', 'except-parens'],
    'no-console': 'off',
    'no-constant-condition': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-dupe-args': 'error',
    'no-dupe-else-if': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty': ['error', {
      allowEmptyCatch: true
    }],
    'no-empty-character-class': 'error',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-parens': ['error', 'all', {
      conditionalAssign: false,
      returnAssign: false,
      nestedBinaryExpressions: false,
      ignoreJSX: 'multi-line',
      enforceForArrowConditionals: false,
      enforceForSequenceExpressions: false,
      enforceForNewInMemberExpressions: false
    }],
    'no-extra-semi': 'error',
    'no-func-assign': 'error',
    'no-import-assign': 'error',
    'no-inner-declarations': ['error', 'functions'],
    'no-invalid-regexp': ['error', {
      allowConstructorFlags: []
    }],
    'no-irregular-whitespace': ['error', {
      skipStrings: true,
      skipComments: true,
      skipRegExps: true,
      skipTemplates: true
    }],
    'no-misleading-character-class': 'error',
    'no-obj-calls': 'error',
    'no-prototype-builtins': 'error',
    'no-regex-spaces': 'error',
    'no-setter-return': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': ['error', {
      enforceForOrderingRelations: false
    }],
    'require-atomic-updates': 'error',
    'use-isnan': ['error', {
      enforceForSwitchCase: false,
      enforceForIndexOf: false
    }],
    'valid-typeof': ['error', {
      requireStringLiterals: true
    }]
  }
}
