'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _serveFavicon = require('serve-favicon');

var _serveFavicon2 = _interopRequireDefault(_serveFavicon);

var _helmet = require('helmet');

var _helmet2 = _interopRequireDefault(_helmet);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _env = require('./config/env');

var _env2 = _interopRequireDefault(_env);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _users = require('./users');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import users from 'users';

var app = (0, _express2.default)();

/*==================================
=            Middleware            =
==================================*/
app.use((0, _serveFavicon2.default)(_path2.default.join(__dirname, 'favicon.ico')));
app.use((0, _helmet2.default)()); // Helmet helps you secure your Express apps by setting various HTTP headers.
app.use((0, _compression2.default)());
app.use((0, _morgan2.default)('tiny'));
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));
// serve static files, this is for frontend React
app.use('/static', _express2.default.static(_path2.default.join(__dirname, 'public', 'static')));
// app.use('/users', users)
/*=====  End of Middleware  ======*/

/*===========================================
=            Baic Authentication            =
===========================================*/

// app.use(require('node-basicauth')({'haochuan': 'password'}));

/*=====  End of Baic Authentication  ======*/

/*===========================
=            COR            =
===========================*/

// app.use(require('cors')());

/*=====  End of COR  ======*/

// Routes
app.use('/api/v1', _routes2.default.api_v1);
app.use('/page', _routes2.default.page);

app.use('/users', _users2.default);

// Load React App
// Serve HTML file for production
if (_env2.default.name === 'production') {
  app.get('*', function response(req, res) {
    res.sendFile(_path2.default.join(__dirname, 'public', 'index.html'));
  });
}

exports.default = app;
//# sourceMappingURL=app.js.map