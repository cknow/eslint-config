module.exports = {

  // http://eslint.org/docs/rules/#nodejs-and-commonjs
  rules: {
    'callback-return': ['error', ['cb', 'callback', 'next', 'done']],
    'global-require': 'off',
    'handle-callback-err': ['error', '^.*(e|E)rr'],
    'no-buffer-constructor': 'error',
    'no-mixed-requires': ['error', {
      grouping: true,
      allowCall: true
    }],
    'no-new-require': 'error',
    'no-path-concat': 'error',
    'no-process-env': 'off',
    'no-process-exit': 'off',
    'no-restricted-modules': 'off',
    'no-sync': ['off', {
      allowAtRootLevel: false
    }]
  }
}
