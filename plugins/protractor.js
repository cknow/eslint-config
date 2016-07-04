'use strict';

module.exports = {
    env: {
        protractor: true
    },
    plugins: [
        'protractor'
    ],
    rules: {
        'protractor/by-css-shortcut': 'error',
        'protractor/missing-perform': 'error',
        'protractor/missing-wait-message': 'error',
        'protractor/no-angular-classes': 'error',
        'protractor/no-browser-pause': 'error',
        'protractor/no-browser-sleep': 'error',
        'protractor/no-by-xpath': 'error',
        'protractor/no-describe-selectors': 'error',
        'protractor/no-shadowing': 'error',
        'protractor/use-angular-locators': 'error',
        'protractor/use-first-last': 'error',
        'protractor/use-simple-repeaters': 'error'
    }
};
