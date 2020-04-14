"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = MyButton;

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _styles = require("@material-ui/core/styles");

var _colors = require("@material-ui/core/colors");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _extends() {
  _extends =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends.apply(this, arguments);
}

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    button: {
      background: "black",
      color: _colors.purple[700],
      fontSize: "1.5em",
      fontWeight: 700,
      boxShadow: "0 3px 5px 2px rgba(252, 242, 1, .3)",
      "&:hover": {
        background: "#e81bf3",
        boxShadow: "0 0 25px #e81bf3,0 0 50px #e81bf3,0 0 200px #e81bf3",
        color: "black",
        transition: "0.5s",
      },
    },
  };
});

function MyButton(props) {
  var classes = useStyles();
  return /*#__PURE__*/ _react.default.createElement(
    _Button.default,
    _extends(
      {
        type: "submit",
        fullWidth: true,
        variant: "contained",
        className: classes.button,
      },
      props
    )
  );
}

//# sourceMappingURL=MyButton.js.map
