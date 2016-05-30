import test from 'ava';
import eslint from 'eslint';
import tempWrite from 'temp-write';
import _ from 'lodash';

function runESLint(str, conf) {
    const linter = new eslint.CLIEngine({
        useEslintrc: false,
        configFile: tempWrite.sync(JSON.stringify(conf))
    });

    return linter.executeOnText(str).results[0].messages;
}

test('index', t => {
    const conf = require('../');
    const errors = runESLint('\'use strict\';\nvar foo = \'\';\n', conf);

    t.true(_.isPlainObject(conf));
    t.is(errors[0].ruleId, 'no-unused-vars');
});

test('browser', t => {
    const conf = require('../browser');
    const errors = runESLint('\'use strict\';\nprocess.exit();\n', conf);

    t.true(_.isPlainObject(conf));
    t.is(errors[0].ruleId, 'no-undef');
});

test('plugin babel', t => {
    const conf = require('../plugins/babel');
    const errors = runESLint('\'use strict\';\nvar foo = true;\n', conf);

    t.true(_.isPlainObject(conf));
    t.is(errors[0].ruleId, 'no-var');
});

test('plugin angular', t => {
    const conf = require('../plugins/angular');
    const errors = runESLint('\'use strict\';\n$(\'.foo\');\n', conf);

    t.true(_.isPlainObject(conf));
    t.is(errors[0].ruleId, 'angular/angularelement');
});

test('plugin jquery', t => {
    const conf = require('../plugins/jquery');
    const errors = runESLint('\'use strict\';\n$.ajax();\n', conf);

    t.true(_.isPlainObject(conf));
    t.is(errors[0].ruleId, 'jquery/no-ajax');
});

test('plugin node', t => {
    const conf = _.extend(require('../'), require('../plugins/node'));
    const errors = runESLint('\'use strict\';\nimport foo from \'foo\';\nfoo();\n', conf);

    t.true(_.isPlainObject(conf));
    t.is(errors[0].ruleId, 'node/no-missing-import');
});

test('plugin ava', t => {
    const conf = _.extend(require('../'), require('../plugins/ava'));
    const errors = runESLint(
        '\'use strict\';\nimport test from \'ava\';\n' +
        'test(t => {\n    t.pass();\n});\n' +
        'test(t => {\n    t.pass();\n});\n', conf);

    t.true(_.isPlainObject(conf));
    t.is(errors[0].ruleId, 'ava/test-title');
});

test('plugin mocha', t => {
    const conf = require('../plugins/mocha');
    const errors = runESLint('\'use strict\';\ndescribe.only(\'foo\', function() {});\n', conf);

    t.true(_.isPlainObject(conf));
    t.is(errors[0].ruleId, 'mocha/no-exclusive-tests');
});

test('plugin jasmine', t => {
    const conf = require('../plugins/jasmine');
    const errors = runESLint('\'use strict\';\nvar spy = jasmine.createSpy();\n', conf);

    t.true(_.isPlainObject(conf));
    t.is(errors[0].ruleId, 'jasmine/named-spy');
});

test('plugin protractor', t => {
    const conf = require('../plugins/protractor');
    const errors = runESLint('\'use strict\';\nelement(by.css(\'.class\'));\n', conf);

    t.true(_.isPlainObject(conf));
    t.is(errors[0].ruleId, 'protractor/by-css-shortcut');
});
