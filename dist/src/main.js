'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _App = require('./App.vue');

var _App2 = _interopRequireDefault(_App);

var _routes = require('./routes');

var _store = require('./store/store');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);

var router = new _vueRouter2.default({
  mode: 'history',
  routes: _routes.routes
});

new _vue2.default({
  el: '#app',
  router: router,
  store: _store2.default,
  render: function render(h) {
    return h(_App2.default);
  }
});
//# sourceMappingURL=main.js.map