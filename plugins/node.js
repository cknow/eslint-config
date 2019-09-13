module.exports = {
  plugins: [
    'node'
  ],
  rules: {
    'node/exports-style': ['error', 'module.exports', {
      allowBatchAssign: false
    }],
    'node/file-extension-in-import': ['error', 'always'],
    'node/no-deprecated-api': ['error', {
      ignoreModuleItems: [],
      ignoreGlobalItems: [],
      ignoreIndirectDependencies: false
    }],
    'node/no-exports-assign': 'error',
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
    'node/no-unsupported-features/es-builtins': ['error', {
      version: '>=8.0.0',
      ignores: []
    }],
    'node/no-unsupported-features/es-syntax': ['error', {
      version: '>=8.0.0',
      ignores: []
    }],
    'node/no-unsupported-features/node-builtins': ['error', {
      version: '>=8.0.0',
      ignores: []
    }],
    'node/prefer-global/buffer': ['error', 'always'],
    'node/prefer-global/console': ['error', 'always'],
    'node/prefer-global/process': ['error', 'always'],
    'node/prefer-global/text-decoder': ['error', 'always'],
    'node/prefer-global/text-encoder': ['error', 'always'],
    'node/prefer-global/url-search-params': ['error', 'always'],
    'node/prefer-global/url': ['error', 'always'],
    'node/prefer-promises/dns': 'error',
    'node/prefer-promises/fs': 'error',
    'node/process-exit-as-throw': 'error',
    'node/shebang': ['error', {
      convertPath: {}
    }]
  }
}
