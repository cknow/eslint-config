'use strict';

module.exports = {
    env: {
        protractor: true
    },
    plugins: [
        'protractor'
    ],
    rules: {
        'protractor/missing-perform': 'error',
        'protractor/no-browser-pause': 'error',
        'protractor/missing-wait-message': 'error',
        'protractor/no-browser-sleep': 'error',
        'protractor/no-by-xpath': 'error',
        'protractor/no-describe-selectors': 'error',
        'protractor/no-angular-classes': 'error',
        'protractor/use-angular-locators': 'error',
        'protractor/use-simple-repeaters': 'error',
        'protractor/by-css-shortcut': 'error'
    }
};
