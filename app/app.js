"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _routes = require("./routes.js");

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

// export app.js

var app = (0, _express2.default)();
//

app.use("/", _routes2.default); // początkowa scieżka dla routera
// app.use("/users", usersRoutes) // inna ścieżka
// app.use(json)
exports.default = app;
//# sourceMappingURL=app.js.map