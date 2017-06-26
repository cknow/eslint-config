'use strict';

module.exports = {
    plugins: [
        'node'
    ],
    rules: {
        'node/exports-style': ['error', 'module.exports', {
            allowBatchAssign: false
        }],
        'node/no-deprecated-api': ['error', {
            ignoreModuleItems: [],
            ignoreGlobalItems: [],
            ignoreIndirectDependencies: false
        }],
        'node/no-extraneous-import': ['error', {
            allowModules: [],
            convertPath: {}
        }],
        'node/no-extraneous-require': ['error', {
            allowModules: [],
            convertPath: {}
        }],
        'node/no-missing-import': ['error', {
            allowModules: [],
            tryExtensions: ['.js', '.json', '.node'],
            resolvePaths: []
        }],
        'node/no-missing-require': ['error', {
            allowModules: [],
            tryExtensions: ['.js', '.json', '.node'],
            resolvePaths: []
        }],
        'node/no-unpublished-bin': ['error', {
            convertPath: {}
        }],
        'node/no-unpublished-import': ['error', {
            allowModules: [],
            convertPath: {},
            tryExtensions: ['.js', '.json', '.node']
        }],
        'node/no-unpublished-require': ['error', {
            allowModules: [],
            convertPath: {},
            tryExtensions: ['.js', '.json', '.node']
        }],
        'node/no-unsupported-features': ['error', {
            version: 4,
            ignores: []
        }],
        'node/process-exit-as-throw': 'error',
        'node/shebang': ['error', {
            convertPath: {}
        }]
    }
};
