'use strict';

module.exports = {
    plugins: [
        'node'
    ],
    rules: {
        'node/exports-style': ['error', 'module.exports', {
            allowBatchAssign: false
        }],
        'node/no-deprecated-api': 'error',
        'node/no-missing-import': 'error',
        'node/no-missing-require': 'error',
        'node/no-unpublished-bin': 'error',
        'node/no-unpublished-import': 'error',
        'node/no-unpublished-require': 'error',
        'node/no-unsupported-features': ['error', {
            version: 6
        }],
        'node/process-exit-as-throw': 'error',
        'node/shebang': 'error'
    }
};
