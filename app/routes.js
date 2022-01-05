"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _controller = require("./controller.js");

var _controller2 = _interopRequireDefault(_controller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

//funkcje wywoływane w pliku kontrolera

// router

router.get("/", function (req, res) {
  return _controller2.default.start(req, res);
});
router.get("/add", function () {
  return _controller2.default.add(Math.random() * 10);
});
router.get("/delete/:id", function (req, res) {
  return _controller2.default.delete(req.params.id);
});
router.get("/all", function () {
  return console.log(_controller2.default.all());
});
router.get("/length", function () {
  return console.log(_controller2.default.length());
});

exports.default = router;
//# sourceMappingURL=routes.js.map