'use strict';

module.exports = {
    plugins: [
        'node'
    ],
    rules: {
        'node/no-deprecated-api': 2,
        'node/no-missing-import': 2,
        'node/no-missing-require': 2,
        'node/no-unpublished-import': 2,
        'node/no-unpublished-require': 2,
        'node/no-unsupported-features': [2, {version: 6}],
        'node/process-exit-as-throw': 2,
        'node/shebang': 2
    }
};