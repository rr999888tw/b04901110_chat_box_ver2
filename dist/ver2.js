'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ver = require('./ver1');

var _ver2 = _interopRequireDefault(_ver);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use('/static', _express2.default.static(_path2.default.join(__dirname, 'public', 'static')));
app.use('/users', _ver2.default);
// console.log(`${__dirname}/build`);

exports.default = app;
//# sourceMappingURL=ver2.js.map