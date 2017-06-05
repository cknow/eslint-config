module.exports = function(wallaby) {
    return {
        files: [
            'config/**/*.js',
            'plugins/**/*.js',
            'rules/**/*.js',
            'browser.js',
            'esnext.js',
            'index.js'
        ],

        tests: [
            'test/**/*.js'
        ],

        env: {
            type: 'node'
        },

        compilers: {
            '**/*.js': wallaby.compilers.babel({
                presets: ['env']
            })
        },

        testFramework: 'ava'
    };
};
