# ESLint Config

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html)

[![NPM Version](https://img.shields.io/npm/v/@datalogix/eslint-config.svg)](https://www.npmjs.com/package/@datalogix/eslint-config)
[![Downloads](https://img.shields.io/npm/dt/@datalogix/eslint-config.svg)](https://www.npmjs.com/package/@datalogix/eslint-config)
[![MIT License](https://img.shields.io/npm/l/@datalogix/eslint-config.svg)](LICENSE)

[![Build Status](https://travis-ci.org/datalogix/eslint-config.svg?branch=master)](https://travis-ci.org/datalogix/eslint-config)
[![Build status](https://ci.appveyor.com/api/projects/status/wn7a9c99eep8ydma/branch/master?svg=true)](https://ci.appveyor.com/project/ricardogobbosouza/eslint-config/branch/master)
[![Coverage Status](https://coveralls.io/repos/github/datalogix/eslint-config/badge.svg?branch=master)](https://coveralls.io/github/datalogix/eslint-config?branch=master)

[![Code Climate](https://codeclimate.com/github/datalogix/eslint-config/badges/gpa.svg)](https://codeclimate.com/github/datalogix/eslint-config)
[![Test Coverage](https://codeclimate.com/github/datalogix/eslint-config/badges/coverage.svg)](https://codeclimate.com/github/datalogix/eslint-config/coverage)
[![Issue Count](https://codeclimate.com/github/datalogix/eslint-config/badges/issue_count.svg)](https://codeclimate.com/github/datalogix/eslint-config)

## Install

```bash
npm install --save-dev @datalogix/eslint-config
```

## Usage

> ESLint [Configuration File Formats](http://eslint.org/docs/user-guide/configuring#configuration-file-formats)

Add some ESLint config to your `.eslintrc.js`:

```js
module.exports = {
  extends: '@datalogix/eslint-config'
}
```

ESNext

```js
module.exports = {
  extends: '@datalogix/eslint-config/esnext'
}
```

Browser

```js
module.exports = {
  extends: '@datalogix/eslint-config/browser'
}
```

## Usage direct on command line

```bash
eslint --config ./node_modules/@datalogix/eslint-config/index.js
```

> **Note:** It is not necessary to create the `.eslintrc.js` file.

### Plugins

**The plugins do not use the default settings.**

To this extend `@datalogix/eslint-config` or `@datalogix/eslint-config/browser` first.

```js
module.exports = {
  extends: ['@datalogix/eslint-config', '@datalogix/eslint-config/plugins/PLUGIN_NAME']
}
```

#### Angular

Install

```bash
npm install --save-dev eslint-plugin-angular
```

Usage

```js
module.exports = {
  extends: '@datalogix/eslint-config/plugins/angular'
}
```

#### AVA

Install

```bash
npm install --save-dev eslint-plugin-ava
```

Usage

```js
module.exports = {
  extends: '@datalogix/eslint-config/plugins/ava'
}
```

#### Jasmine

Install

```bash
npm install --save-dev eslint-plugin-jasmine
```

Usage

```js
module.exports = {
  extends: '@datalogix/eslint-config/plugins/jasmine'
}
```

#### Jest

Install

```bash
npm install --save-dev eslint-plugin-jest
```

Usage

```js
module.exports = {
  extends: '@datalogix/eslint-config/plugins/Jest'
}
```

#### Jquery

Install

```bash
npm install --save-dev eslint-plugin-jquery
```

Usage

```js
module.exports = {
  extends: '@datalogix/eslint-config/plugins/jquery'
}
```

#### Mocha

Install

```bash
npm install --save-dev eslint-plugin-mocha
```

Usage

```js
module.exports = {
  extends: '@datalogix/eslint-config/plugins/mocha'
}
```

#### Node

Install

```bash
npm install --save-dev eslint-plugin-node
```

Usage

```js
module.exports = {
  extends: '@datalogix/eslint-config/plugins/node'
}
```

#### Promise

Install

```bash
npm install --save-dev eslint-plugin-promise
```

Usage

```js
module.exports = {
  extends: '@datalogix/eslint-config/plugins/promise'
}
```

#### Protractor

Install

```bash
npm install --save-dev eslint-plugin-protractor
```

Usage

```js
module.exports = {
  extends: '@datalogix/eslint-config/plugins/protractor'
}
```

#### Vue

Install

```bash
npm install --save-dev eslint-plugin-vue
```

Usage

```js
module.exports = {
  extends: '@datalogix/eslint-config/plugins/vue'
}
```
