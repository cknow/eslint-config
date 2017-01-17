'use strict';

module.exports = {
    env: {
        protractor: true
    },
    plugins: [
        'protractor'
    ],
    rules: {
        'protractor/array-callback-return': 'error',
        'protractor/by-css-shortcut': 'error',
        'protractor/correct-chaining': 'error',
        'protractor/missing-perform': 'error',
        'protractor/missing-wait-message': 'error',
        'protractor/no-absolute-url': 'error',
        'protractor/no-angular-attributes': 'error',
        'protractor/no-angular-classes': 'error',
        'protractor/no-array-finder-methods': 'error',
        'protractor/no-bootstrap-classes': 'error',
        'protractor/no-browser-driver': 'error',
        'protractor/no-browser-pause': 'error',
        'protractor/no-browser-sleep': 'error',
        'protractor/no-by-xpath': 'error',
        'protractor/no-compound-classes': 'error',
        'protractor/no-describe-selectors': 'error',
        'protractor/no-execute-script': 'error',
        'protractor/no-expect-in-po': 'error',
        'protractor/no-get-in-it': 'error',
        'protractor/no-get-inner-outer-html': 'error',
        'protractor/no-invalid-selectors': 'error',
        'protractor/no-promise-in-if': 'error',
        'protractor/no-repetitive-locators': 'error',
        'protractor/no-repetitive-selectors': 'error',
        'protractor/no-shadowing': 'error',
        'protractor/use-angular-locators': 'error',
        'protractor/use-first-last': 'error',
        'protractor/use-promise-all': 'error',
        'protractor/use-simple-repeaters': 'error',
        'protractor/valid-locator-type': 'error'
    }
};
