'use strict';

module.exports = {
    globals: {
        angular: true
    },
    plugins: [
        'angular'
    ],
    rules: {
        'angular/angularelement': 'error',
        'angular/avoid-scope-typos': 'error',
        'angular/component-limit': ['error', 1],
        'angular/component-name': ['error', '/^[a-z]+(?:[A-Z][a-z]+)*$/'],
        'angular/constant-name': ['error', '/^[A-Z]+(?:_[A-Z]+)*$/'],
        'angular/controller-as': 'error',
        'angular/controller-as-route': 'error',
        'angular/controller-as-vm': ['error', 'vm'],
        'angular/controller-name': ['error', '/^[A-Z][a-z]+(?:[A-Z][a-z]+)*Controller/'],
        'angular/deferred': 'error',
        'angular/definedundefined': 'error',
        'angular/di': ['error', '$inject'],
        'angular/di-order': ['error', false, 'case_sensitive'],
        'angular/di-unused': 'error',
        'angular/directive-name': ['error', '/^[a-z]+(?:[A-Z][a-z]+)*$/'],
        'angular/directive-restrict': ['error', {
            restrict: 'AE',
            explicit: 'always'
        }],
        'angular/document-service': 'error',
        'angular/dumb-inject': 'error',
        'angular/empty-controller': 'error',
        'angular/factory-name': ['error', '/^[a-z]+(?:[A-Z][a-z]+)*$/'],
        'angular/file-name': ['error', {
            typeSeparator: 'dot',
            nameStyle: 'dash',
            ignoreTypeSuffix: true
        }],
        'angular/filter-name': ['error', '/^[a-z]+(?:[A-Z][a-z]+)*$/'],
        'angular/foreach': 'error',
        'angular/function-type': ['error', 'named'],
        'angular/interval-service': 'error',
        'angular/json-functions': 'error',
        'angular/log': 'error',
        'angular/module-dependency-order': ['error', {
            grouped: true,
            prefix: 'app'
        }],
        'angular/module-getter': 'error',
        'angular/module-name': ['error', '/^[a-z]+(?:.[A-Z][a-z]+)*$/'],
        'angular/module-setter': 'error',
        'angular/no-angular-mock': 'error',
        'angular/no-controller': 'error',
        'angular/no-cookiestore': 'error',
        'angular/no-directive-replace': 'error',
        'angular/no-inline-template': ['error', {
            allowSimple: true
        }],
        'angular/no-jquery-angularelement': 'error',
        'angular/no-private-call': 'error',
        'angular/no-run-logic': ['error', {
            allowParams: true
        }],
        'angular/no-service-method': 'error',
        'angular/no-services': ['error', ['$http', '$resource', 'Restangular']],
        'angular/on-destroy': 'error',
        'angular/on-watch': 'error',
        'angular/one-dependency-per-line': 'off',
        'angular/prefer-component': 'error',
        'angular/provider-name': ['error', '/^[a-z]+(?:[A-Z][a-z]+)*$/'],
        'angular/rest-service': 'off',
        'angular/service-name': ['error', '/^[a-z]+(?:[A-Z][a-z]+)*$/', {
            oldBehavior: false
        }],
        'angular/timeout-service': 'error',
        'angular/typecheck-array': 'error',
        'angular/typecheck-date': 'error',
        'angular/typecheck-function': 'error',
        'angular/typecheck-number': 'error',
        'angular/typecheck-object': 'error',
        'angular/typecheck-string': 'error',
        'angular/value-name': ['error', '/^[a-z]+(?:[A-Z][a-z]+)*$/'],
        'angular/watchers-execution': ['error', '$digest'],
        'angular/window-service': 'error',
        'no-use-before-define': 'off'
    }
};
