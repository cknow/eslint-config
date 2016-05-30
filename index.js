'use strict';

module.exports = {
    extends: [
        './config/environments.js',
        './config/parse-options.js',
        './rules/possible-errors.js',
        './rules/best-practices.js',
        './rules/strict-mode.js',
        './rules/variables.js',
        './rules/stylistic-issues.js',
        './rules/nodejs-commonjs.js',
        './rules/ecmascript-6.js'
    ].map(require.resolve),
    env: {
        node: true
    }
};
