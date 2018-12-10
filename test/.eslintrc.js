'use strict';

const path = require('path');

module.exports = {
    parser: 'babel-eslint',
    extends: path.resolve('./plugins/ava.js')
};
