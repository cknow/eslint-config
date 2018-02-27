# ESLint Config

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html)

[![NPM Version](https://img.shields.io/npm/v/@cknow/eslint-config.svg)](https://www.npmjs.com/package/@cknow/eslint-config)
[![Downloads](https://img.shields.io/npm/dt/@cknow/eslint-config.svg)](https://www.npmjs.com/package/@cknow/eslint-config)
[![MIT License](https://img.shields.io/npm/l/@cknow/eslint-config.svg)](LICENSE)

[![Build Status](https://travis-ci.org/cknow/eslint-config.svg?branch=master)](https://travis-ci.org/cknow/eslint-config)
[![Build status](https://ci.appveyor.com/api/projects/status/wn7a9c99eep8ydma/branch/master?svg=true)](https://ci.appveyor.com/project/cknow/eslint-config/branch/master)
[![Coverage Status](https://coveralls.io/repos/github/cknow/eslint-config/badge.svg?branch=master)](https://coveralls.io/github/cknow/eslint-config?branch=master)

[![Code Climate](https://codeclimate.com/github/cknow/eslint-config/badges/gpa.svg)](https://codeclimate.com/github/cknow/eslint-config)
[![Test Coverage](https://codeclimate.com/github/cknow/eslint-config/badges/coverage.svg)](https://codeclimate.com/github/cknow/eslint-config/coverage)
[![Issue Count](https://codeclimate.com/github/cknow/eslint-config/badges/issue_count.svg)](https://codeclimate.com/github/cknow/eslint-config)

[![Dependencies Status](https://david-dm.org/cknow/eslint-config/status.svg)](https://david-dm.org/cknow/eslint-config)
[![devDependencies Status](https://david-dm.org/cknow/eslint-config/dev-status.svg)](https://david-dm.org/cknow/eslint-config?type=dev)
[![peerDependencies Status](https://david-dm.org/cknow/eslint-config/peer-status.svg)](https://david-dm.org/cknow/eslint-config?type=peer)

[![Semantic Release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/cknow/eslint-config.svg)](http://isitmaintained.com/project/cknow/eslint-config)
[![Percentage of issues still open](http://isitmaintained.com/badge/open/cknow/eslint-config.svg)](http://isitmaintained.com/project/cknow/eslint-config)
[![Gitter](https://badges.gitter.im/cknow/eslint-config.svg)](https://gitter.im/cknow/eslint-config?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

## Install

```bash
npm install --save-dev @cknow/eslint-config
```

## Usage

> ESLint [Configuration File Formats](http://eslint.org/docs/user-guide/configuring#configuration-file-formats)

Add some ESLint config to your `.eslintrc.js`:

```js
module.exports = {
    extends: '@cknow/eslint-config'
};
```

ESNext

```js
module.exports = {
    extends: '@cknow/eslint-config/esnext'
};
```

Browser

```js
module.exports = {
    extends: '@cknow/eslint-config/browser'
};
```

## Usage direct on command line

```bash
eslint --config ./node_modules/@cknow/eslint-config/index.js
```

> **Note:** It is not necessary to create the `.eslintrc.js` file.

### Plugins

**The plugins do not use the default settings.**

To this extend `@cknow/eslint-config` or `@cknow/eslint-config/browser` first.

```js
module.exports = {
    extends: ['@cknow/eslint-config', '@cknow/eslint-config/plugins/PLUGIN_NAME']
};
```

#### Angular

Install

```bash
npm install --save-dev eslint-plugin-angular
```

Usage

```js
module.exports = {
    extends: '@cknow/eslint-config/plugins/angular'
};
```

#### AVA

Install

```bash
npm install --save-dev eslint-plugin-ava
```

Usage

```js
module.exports = {
    extends: '@cknow/eslint-config/plugins/ava'
};
```

#### Jasmine

Install

```bash
npm install --save-dev eslint-plugin-jasmine
```

Usage

```js
module.exports = {
    extends: '@cknow/eslint-config/plugins/jasmine'
};
```

#### Jquery

Install

```bash
npm install --save-dev eslint-plugin-jquery
```

Usage

```js
module.exports = {
    extends: '@cknow/eslint-config/plugins/jquery'
};
```

#### Mocha

Install

```bash
npm install --save-dev eslint-plugin-mocha
```

Usage

```js
module.exports = {
    extends: '@cknow/eslint-config/plugins/mocha'
};
```

#### Node

Install

```bash
npm install --save-dev eslint-plugin-node
```

Usage

```js
module.exports = {
    extends: '@cknow/eslint-config/plugins/node'
};
```

#### Promise

Install

```bash
npm install --save-dev eslint-plugin-promise
```

Usage

```js
module.exports = {
    extends: '@cknow/eslint-config/plugins/promise'
};
```

#### Protractor

Install

```bash
npm install --save-dev eslint-plugin-protractor
```

Usage

```js
module.exports = {
    extends: '@cknow/eslint-config/plugins/protractor'
};
```

#### Vue

Install

```bash
npm install --save-dev eslint-plugin-vue
```

Usage

```js
module.exports = {
    extends: '@cknow/eslint-config/plugins/vue'
};
```
