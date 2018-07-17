'use strict';

import test from 'ava';
import eslint from 'eslint';
import tempWrite from 'temp-write';
import _ from 'lodash';

const runESLint = (text, conf, filename) => {
    const linter = new eslint.CLIEngine({
        useEslintrc: false,
        configFile: tempWrite.sync(JSON.stringify(conf))
    });

    return linter.executeOnText(text, filename).results[0];
};

test('index', t => {
    const conf = require('../');
    const result = runESLint('var foo = \'\';\n', conf);

    t.is(1, result.errorCount);
    t.is(result.messages[0].ruleId, 'no-unused-vars');
});

test('esnext', t => {
    const conf = require('../esnext');
    const result = runESLint('var foo = true;\n\nconsole.log(foo);\n', conf);

    t.is(1, result.errorCount);
    t.is(result.messages[0].ruleId, 'no-var');
});

test('browser', t => {
    const conf = require('../browser');
    const result = runESLint('process.exit();\n', conf);

    t.is(1, result.errorCount);
    t.is(result.messages[0].ruleId, 'no-undef');
});

test('plugin angular', t => {
    const conf = require('../plugins/angular');
    const result = runESLint('$(\'.foo\');', conf);

    t.is(1, result.errorCount);
    t.is(result.messages[0].ruleId, 'angular/angularelement');
});

test('plugin jquery', t => {
    const conf = require('../plugins/jquery');
    const result = runESLint('$.ajax();', conf);

    t.is(1, result.errorCount);
    t.is(result.messages[0].ruleId, 'jquery/no-ajax');
});

test('plugin node', t => {
    const conf = _.extend(require('../'), require('../plugins/node'));
    const result = runESLint('import foo from \'foo\';\n\nfoo();\n', conf);

    t.is(2, result.errorCount);
    t.is(result.messages[0].ruleId, 'node/no-unsupported-features');
    t.is(result.messages[1].ruleId, 'node/no-missing-import');
});

test('plugin ava', t => {
    const conf = require('./.eslintrc');
    const result = runESLint(
        'import test from \'ava\';\n\n' +
        'test(t => {\n    t.pass();\n});\n' +
        'test(t => {\n    t.pass();\n});\n',
        conf
    );

    t.is(1, result.errorCount);
    t.is(result.messages[0].ruleId, 'ava/test-title');
});

test('plugin mocha', t => {
    const conf = require('../plugins/mocha');
    const result = runESLint('describe(\'foo\', function() {});', conf);

    t.is(1, result.errorCount);
    t.is(result.messages[0].ruleId, 'mocha/valid-suite-description');
});

test('plugin jasmine', t => {
    const conf = require('../plugins/jasmine');
    const result = runESLint('var spy = jasmine.createSpy();', conf);

    t.is(2, result.errorCount);
    t.is(result.messages[0].ruleId, 'jasmine/named-spy');
    t.is(result.messages[1].ruleId, 'jasmine/no-unsafe-spy');
});

test('plugin jest', t => {
    const conf = require('../plugins/jest');
    const result = runESLint('describe(\'test\');', conf);

    t.is(1, result.errorCount);
    t.is(result.messages[0].ruleId, 'jest/valid-describe');
});

test('plugin promise', t => {
    const conf = require('../plugins/promise');
    const result = runESLint('new Promise.resolve();', conf);

    t.is(1, result.errorCount);
    t.is(result.messages[0].ruleId, 'promise/no-new-statics');
});

test('plugin protractor', t => {
    const conf = require('../plugins/protractor');
    const result = runESLint('element(by.css(\'.class\')).click();', conf);

    t.is(1, result.errorCount);
    t.is(result.messages[0].ruleId, 'protractor/by-css-shortcut');
});

test('plugin vue', t => {
    const conf = require('../plugins/vue');
    const result = runESLint('<template><textarea>{{ message }}</textarea></template>', conf, 'foo.vue');

    t.is(1, result.errorCount);
    t.is(result.messages[0].ruleId, 'vue/no-textarea-mustache');
});
