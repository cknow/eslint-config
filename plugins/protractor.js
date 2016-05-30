'use strict';

module.exports = {
    env: {
        protractor: true
    },
    plugins: [
        'protractor'
    ],
    rules: {
        'protractor/missing-perform': 2,
        'protractor/no-browser-pause': 2,
        'protractor/missing-wait-message': 2,
        'protractor/no-browser-sleep': 2,
        'protractor/no-by-xpath': 2,
        'protractor/no-describe-selectors': 2,
        'protractor/by-css-shortcut': 2
    }
};
