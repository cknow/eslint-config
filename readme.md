# ESLint Config ClickNow
> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for [ClickNow](https://github.com/cknow/eslint-config-clicknow)

[![Build Status](https://travis-ci.org/cknow/eslint-config-clicknow.svg)](https://travis-ci.org/cknow/eslint-config-clicknow)
[![Codecov Coverage](https://img.shields.io/codecov/c/github/cknow/eslint-config-clicknow.svg)](https://codecov.io/github/cknow/eslint-config-clicknow)
[![NPM Version](https://img.shields.io/npm/v/eslint-config-clicknow.svg)](https://www.npmjs.com/package/eslint-config-clicknow)
[![Downloads](https://img.shields.io/npm/dm/eslint-config-clicknow.svg)](https://www.npmjs.com/package/eslint-config-clicknow)
[![Dependency Status](https://david-dm.org/cknow/eslint-config-clicknow.svg)](https://david-dm.org/cknow/eslint-config-clicknow)
[![devDependency Status](https://david-dm.org/cknow/eslint-config-clicknow/dev-status.svg)](https://david-dm.org/cknow/eslint-config-clicknow#info=devDependencies)
[![MIT License](https://img.shields.io/npm/l/eslint-config-clicknow.svg)](http://opensource.org/licenses/MIT)
[![Semantic Release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

[![NPM](https://nodei.co/npm/eslint-config-clicknow.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/eslint-config-clicknow)

## Install

```
npm install --save-dev eslint-config-clicknow
```

## Usage
> ESLint [Configuration File Formats](http://eslint.org/docs/user-guide/configuring#configuration-file-formats)

Add some ESLint config to your `.eslintrc.js`:

```js
module.exports = {
    extends: 'clicknow'
};
```

ESNext

```js
module.exports = {
    extends: 'clicknow/esnext'
};
```

Browser

```js
module.exports = {
    extends: 'clicknow/browser'
};
```

### Plugins

__The plugins do not use the default settings.__

To this extend `clicknow` or `clicknow/browser` first.

```js
module.exports = {
    extends: ['clicknow', 'clicknow/plugins/PLUGIN']
};
```

#### Babel

Install

```
npm install --save-dev eslint-plugin-babel babel-eslint
```

Usage

```js
module.exports = {
    extends: 'clicknow/plugins/babel'
};
```

#### Angular

Install

```
npm install --save-dev eslint-plugin-angular
```

Usage

```js
module.exports = {
    extends: 'clicknow/plugins/angular'
};
```

#### Jquery

Install

```
npm install --save-dev eslint-plugin-jquery
```

Usage

```js
module.exports = {
    extends: 'clicknow/plugins/jquery'
};
```

#### Node

Install

```
npm install --save-dev eslint-plugin-node
```

Usage

```js
module.exports = {
    extends: 'clicknow/plugins/node'
};
```

#### Mocha

Install

```
npm install --save-dev eslint-plugin-mocha
```

Usage

```js
module.exports = {
    extends: 'clicknow/plugins/mocha'
};
```

#### Jasmine

Install

```
npm install --save-dev eslint-plugin-jasmine
```

Usage

```js
module.exports = {
    extends: 'clicknow/plugins/jasmine'
};
```

#### AVA

Install

```
npm install --save-dev eslint-plugin-ava
```

Usage

```js
module.exports = {
    extends: 'clicknow/plugins/ava'
};
```

#### Protractor

Install

```
npm install --save-dev eslint-plugin-protractor
```

Usage

```js
module.exports = {
    extends: 'clicknow/plugins/protractor'
};
```
