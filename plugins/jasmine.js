module.exports = {
  env: {
    jasmine: true
  },
  plugins: [
    'jasmine'
  ],
  rules: {
    'jasmine/expect-matcher': 'error',
    'jasmine/expect-single-argument': 'error',
    'jasmine/missing-expect': 'error',
    'jasmine/named-spy': 'error',
    'jasmine/new-line-before-expect': 'error',
    'jasmine/new-line-between-declarations': 'error',
    'jasmine/no-assign-spyon': 'error',
    'jasmine/no-describe-variables': 'error',
    'jasmine/no-disabled-tests': 'error',
    'jasmine/no-expect-in-setup-teardown': 'error',
    'jasmine/no-focused-tests': 'error',
    'jasmine/no-global-setup': 'error',
    'jasmine/no-pending-tests': 'warn',
    'jasmine/no-promise-without-done-fail': 'error',
    'jasmine/no-spec-dupes': ['error', 'block'],
    'jasmine/no-suite-callback-args': 'error',
    'jasmine/no-suite-dupes': ['error', 'block'],
    'jasmine/no-unsafe-spy': 'error',
    'jasmine/prefer-jasmine-matcher': 'error',
    'jasmine/prefer-toHaveBeenCalledWith': 'error'
  }
}
