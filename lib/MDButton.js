'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./MDButton.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MDButton = function (_Component) {
  _inherits(MDButton, _Component);

  function MDButton() {
    _classCallCheck(this, MDButton);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(MDButton).apply(this, arguments));
  }

  _createClass(MDButton, [{
    key: 'getButton',
    value: function getButton() {
      var buttonProps = {};
      var theme = 'default';
      if (this.hasInProps('onClick')) {
        buttonProps.onClick = this.props.onClick;
      }
      if (this.hasInProps('onDoubleClick')) {
        buttonProps.onDoubleClick = this.props.onDoubleClick;
      }
      if (this.hasInProps('onMouseEnter')) {
        buttonProps.onMouseEnter = this.props.onMouseEnter;
      }
      if (this.hasInProps('onMouseLeave')) {
        buttonProps.onMouseLeave = this.props.onMouseLeave;
      }
      if (this.hasInProps('onMouseUp')) {
        buttonProps.onMouseUp = this.props.onMouseUp;
      }
      if (this.hasInProps('onMouseDown')) {
        buttonProps.onMouseDown = this.props.onMouseDown;
      }
      if (this.hasInProps('isDisabled')) {
        buttonProps.isDisabled = this.props.isDisabled;
      }
      if (this.hasInProps('theme')) {
        theme = this.props.theme;
      }
      buttonProps.type = this.props.type || 'button';

      return _react2.default.createElement(
        'button',
        _extends({}, buttonProps, {
          className: (0, _classnames2.default)('md-btn', 'md-btn-' + theme)
        }),
        this.props.children
      );
    }
  }, {
    key: 'hasInProps',
    value: function hasInProps(propName) {
      return propName in this.props;
    }
  }, {
    key: 'render',
    value: function render() {
      var button = this.getButton();
      var href = this.props.href;

      var content = !!href ? _react2.default.createElement(
        'a',
        { href: href },
        button
      ) : button;
      return content;
    }
  }]);

  return MDButton;
}(_react.Component);

MDButton.propTypes = {
  children: _react.PropTypes.object,

  onClick: _react.PropTypes.func,
  onDoubleClick: _react.PropTypes.func,
  onMouseEnter: _react.PropTypes.func,
  onMouseLeave: _react.PropTypes.func,
  onMouseUp: _react.PropTypes.func,
  onMouseDown: _react.PropTypes.func,

  isDisabled: _react.PropTypes.bool,
  href: _react.PropTypes.string,
  theme: _react.PropTypes.string,
  type: _react.PropTypes.string
};

exports.default = MDButton;