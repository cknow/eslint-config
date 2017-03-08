# ESLint Config ClickNow
> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for [ClickNow](https://github.com/cknow/eslint-config-clicknow)

[![NPM Version](https://img.shields.io/npm/v/eslint-config-clicknow.svg)](https://www.npmjs.com/package/eslint-config-clicknow)
[![Downloads](https://img.shields.io/npm/dt/eslint-config-clicknow.svg)](https://www.npmjs.com/package/eslint-config-clicknow)
[![MIT License](https://img.shields.io/npm/l/eslint-config-clicknow.svg)](LICENSE)

[![Build Status](https://travis-ci.org/cknow/eslint-config-clicknow.svg?branch=master)](https://travis-ci.org/cknow/eslint-config-clicknow)
[![Build status](https://ci.appveyor.com/api/projects/status/ssi4eyj2t72w3e8p/branch/master?svg=true)](https://ci.appveyor.com/project/cknow/eslint-config-clicknow/branch/master)
[![Coverage Status](https://coveralls.io/repos/github/cknow/eslint-config-clicknow/badge.svg?branch=master)](https://coveralls.io/github/cknow/eslint-config-clicknow?branch=master)

[![Dependency Status](https://dependencyci.com/github/cknow/eslint-config-clicknow/badge)](https://dependencyci.com/github/cknow/eslint-config-clicknow)
[![Dependencies Status](https://david-dm.org/cknow/eslint-config-clicknow/status.svg)](https://david-dm.org/cknow/eslint-config-clicknow)
[![devDependencies Status](https://david-dm.org/cknow/eslint-config-clicknow/dev-status.svg)](https://david-dm.org/cknow/eslint-config-clicknow?type=dev)
[![peerDependencies Status](https://david-dm.org/cknow/eslint-config-clicknow/peer-status.svg)](https://david-dm.org/cknow/eslint-config-clicknow?type=peer)

[![Semantic Release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/cknow/eslint-config-clicknow.svg)](http://isitmaintained.com/project/cknow/eslint-config-clicknow)
[![Percentage of issues still open](http://isitmaintained.com/badge/open/cknow/eslint-config-clicknow.svg)](http://isitmaintained.com/project/cknow/eslint-config-clicknow)
[![Gitter](https://badges.gitter.im/cknow/eslint-config-clicknow.svg)](https://gitter.im/cknow/eslint-config-clicknow?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

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
