"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _model = require("./model.js");

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// export funkcji do obróbki danych w modelu

var __dirname = _path2.default.resolve(); // potrzebny do statycznego serwowania stron
//

// console.log(model.data);
// let data = model.numbers

exports.default = {
    start: function start(req, res) {
        res.sendFile(__dirname + "/static/start.html");
    },
    add: function add(x) {
        _model.numbers.push(x);
    },
    length: function length() {
        return _model.numbers.length;
    },
    delete: function _delete(index) {
        _model.numbers.splice(index, 1);
    },
    all: function all() {
        return _model.numbers;
    }

};
//# sourceMappingURL=controller.js.map