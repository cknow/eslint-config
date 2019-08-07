module.exports = {
  plugins: [
    'promise'
  ],
  rules: {
    'promise/always-return': 'error',
    'promise/avoid-new': 'error',
    'promise/catch-or-return': ['error', {
      allowThen: false,
      allowFinally: true,
      terminationMethod: ['catch', 'finally']
    }],
    'promise/no-callback-in-promise': 'error',
    'promise/no-native': 'off',
    'promise/no-nesting': 'error',
    'promise/no-new-statics': 'error',
    'promise/no-promise-in-callback': 'error',
    'promise/no-return-in-finally': 'error',
    'promise/no-return-wrap': ['error', {
      allowReject: false
    }],
    'promise/param-names': 'error',
    'promise/prefer-await-to-callbacks': 'error',
    'promise/prefer-await-to-then': 'error',
    'promise/valid-params': 'error'
  }
}
