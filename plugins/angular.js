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
        'angular/controller-as': 'error',
        'angular/controller-as-route': 'error',
        'angular/controller-as-vm': ['error', 'vm'],
        'angular/controller-name': ['error', '/[A-Z].*Controller$/'],
        'angular/deferred': 'error',
        'angular/definedundefined': 'error',
        'angular/di': ['error', 'function'],
        'angular/di-order': ['off', true],
        'angular/directive-name': 'off',
        'angular/component-limit': ['error', 1],
        'angular/document-service': 'error',
        'angular/empty-controller': 'off',
        'angular/file-name': ['error', {
            typeSeparator: 'dot',
            nameStyle: 'dash',
            ignoreTypeSuffix: true
        }],
        'angular/filter-name': 'off',
        'angular/foreach': 'error',
        'angular/function-type': ['error', 'named'],
        'angular/interval-service': 'error',
        'angular/json-functions': 'error',
        'angular/log': 'error',
        'angular/module-getter': 'error',
        'angular/module-name': 'off',
        'angular/module-setter': 'error',
        'angular/no-angular-mock': 'off',
        'angular/no-controller': 'off',
        'angular/no-cookiestore': 'error',
        'angular/no-jquery-angularelement': 'error',
        'angular/no-private-call': 'error',
        'angular/no-service-method': 'error',
        'angular/no-services': ['error', ['$http', '$resource', 'Restangular']],
        'angular/on-watch': 'error',
        'angular/rest-service': 'off',
        'angular/service-name': 'off',
        'angular/timeout-service': 'error',
        'angular/typecheck-array': 'error',
        'angular/typecheck-date': 'error',
        'angular/typecheck-function': 'error',
        'angular/typecheck-number': 'error',
        'angular/typecheck-object': 'error',
        'angular/typecheck-string': 'error',
        'angular/watchers-execution': 'off',
        'angular/window-service': 'error',
        'no-use-before-define': 'off'
    }
};
