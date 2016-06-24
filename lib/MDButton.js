'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MDButton).call(this));

    _this.state = {
      mouseOver: false,
      active: false
    };
    _this.handleClick = _this.onClick.bind(_this);
    _this.handleDoubleClick = _this.onDoubleClick.bind(_this);
    _this.handleMouseEnter = _this.onMouseEnter.bind(_this);
    _this.handleMouseLeave = _this.onMouseLeave.bind(_this);
    _this.handleMouseDown = _this.onMouseDown.bind(_this);
    _this.handleMouseUp = _this.onMouseUp.bind(_this);
    return _this;
  }

  _createClass(MDButton, [{
    key: 'hasInProps',
    value: function hasInProps(propName) {
      return propName in this.props;
    }
  }, {
    key: 'onClick',
    value: function onClick() {
      if (this.hasInProps('onClick')) {
        this.props.onClick();
      }
    }
  }, {
    key: 'onDoubleClick',
    value: function onDoubleClick() {
      if (this.hasInProps('onDoubleClick')) {
        this.props.onDoubleClick();
      }
    }
  }, {
    key: 'onMouseEnter',
    value: function onMouseEnter() {
      if (this.hasInProps('onMouseEnter')) {
        this.props.onMouseEnter();
      }
    }
  }, {
    key: 'onMouseLeave',
    value: function onMouseLeave() {
      if (this.hasInProps('onMouseLeave')) {
        this.props.onMouseLeave();
      }
    }
  }, {
    key: 'onMouseUp',
    value: function onMouseUp() {
      if (this.hasInProps('onMouseUp')) {
        this.props.onMouseUp();
      }
    }
  }, {
    key: 'onMouseDown',
    value: function onMouseDown() {
      if (this.hasInProps('onMouseDown')) {
        this.props.onMouseDown();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var isDisabled = _props.isDisabled;
      var theme = _props.theme;
      var href = _props.href;
      var text = _props.text;

      return _react2.default.createElement(
        'a',
        { href: href },
        _react2.default.createElement(
          'button',
          {
            onClick: this.handleClick,
            onDoubleClick: this.handleDoubleClick,
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave,
            onMouseDown: this.handleMouseDown,
            onMouseUp: this.handleMouseUp,
            disabled: isDisabled,
            className: (0, _classnames2.default)('md-btn', 'md-btn-' + theme)
          },
          text
        )
      );
    }
  }]);

  return MDButton;
}(_react.Component);

MDButton.propTypes = {
  onClick: _react.PropTypes.func,
  onDoubleClick: _react.PropTypes.func,
  onMouseEnter: _react.PropTypes.func,
  onMouseLeave: _react.PropTypes.func,
  onMouseUp: _react.PropTypes.func,
  onMouseDown: _react.PropTypes.func,

  isDisabled: _react.PropTypes.bool,
  href: _react.PropTypes.string,
  theme: _react.PropTypes.string,
  text: _react.PropTypes.string
};

MDButton.defaultProps = {
  isDisabled: false,
  href: '#',
  theme: 'primary',
  text: 'button'
};

exports.default = MDButton;