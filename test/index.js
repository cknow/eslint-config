'use strict';

import test from 'ava';
import eslint from 'eslint';
import tempWrite from 'temp-write';
import _ from 'lodash';

const runESLint = (text, conf) => {
    const linter = new eslint.CLIEngine({
        useEslintrc: false,
        configFile: tempWrite.sync(JSON.stringify(conf))
    });

    return linter.executeOnText(text).results[0];
};

test('index', t => {
    const conf = require('../');
    const result = runESLint('\'use strict\';\nvar foo = \'\';\n', conf);

    t.is(1, result.errorCount);
    t.is(result.messages[0].ruleId, 'no-unused-vars');
});

test('esnext', t => {
    const conf = require('../esnext');
    const result = runESLint('\'use strict\';\nvar foo = true;\n\nconsole.log(foo);\n', conf);

    t.is(1, result.errorCount);
    t.is(result.messages[0].ruleId, 'no-var');
});

test('browser', t => {
    const conf = require('../browser');
    const result = runESLint('\'use strict\';\nprocess.exit();\n', conf);

    t.is(1, result.errorCount);
    t.is(result.messages[0].ruleId, 'no-undef');
});

test('plugin angular', t => {
    const conf = require('../plugins/angular');
    const result = runESLint('\'use strict\';\n$(\'.foo\');\n', conf);

    t.is(1, result.errorCount);
    t.is(result.messages[0].ruleId, 'angular/angularelement');
});

test('plugin jquery', t => {
    const conf = require('../plugins/jquery');
    const result = runESLint('\'use strict\';\n$.ajax();\n', conf);

    t.is(1, result.errorCount);
    t.is(result.messages[0].ruleId, 'jquery/no-ajax');
});

test('plugin node', t => {
    const conf = _.extend(require('../'), require('../plugins/node'));
    const result = runESLint('\'use strict\';\nimport foo from \'foo\';\nfoo();\n', conf);

    t.is(2, result.errorCount);
    t.is(result.messages[0].ruleId, 'node/no-missing-import');
    t.is(result.messages[1].ruleId, 'node/no-unpublished-import');
});

test('plugin ava', t => {
    const conf = _.extend(require('../'), require('../plugins/ava'));
    const result = runESLint(
        '\'use strict\';\nimport test from \'ava\';\n' +
        'test(t => {\n    t.pass();\n});\n' +
        'test(t => {\n    t.pass();\n});\n', conf);

    t.is(1, result.errorCount);
    t.is(result.messages[0].ruleId, 'ava/test-title');
});

test('plugin mocha', t => {
    const conf = require('../plugins/mocha');
    const result = runESLint('\'use strict\';\ndescribe.only(\'foo\', function() {});\n', conf);

    t.is(1, result.errorCount);
    t.is(result.messages[0].ruleId, 'mocha/no-exclusive-tests');
});

test('plugin jasmine', t => {
    const conf = require('../plugins/jasmine');
    const result = runESLint('\'use strict\';\nvar spy = jasmine.createSpy();\n', conf);

    t.is(1, result.errorCount);
    t.is(result.messages[0].ruleId, 'jasmine/named-spy');
});

test('plugin protractor', t => {
    const conf = require('../plugins/protractor');
    const result = runESLint('\'use strict\';\nelement(by.css(\'.class\'));\n', conf);

    t.is(1, result.errorCount);
    t.is(result.messages[0].ruleId, 'protractor/by-css-shortcut');
});
