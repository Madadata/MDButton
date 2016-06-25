import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import './MDButton.css';

class MDButton extends Component {

  constructor() {
    super();
    this.state = {
      mouseOver: false,
      active: false,
    };
    this.handleClick = this.onClick.bind(this);
    this.handleDoubleClick = this.onDoubleClick.bind(this);
    this.handleMouseEnter = this.onMouseEnter.bind(this);
    this.handleMouseLeave = this.onMouseLeave.bind(this);
    this.handleMouseDown = this.onMouseDown.bind(this);
    this.handleMouseUp = this.onMouseUp.bind(this);
  }

  hasInProps(propName) {
    return propName in this.props;
  }

  onClick() {
    if (this.hasInProps('onClick')) { this.props.onClick(); }
  }

  onDoubleClick() {
    if (this.hasInProps('onDoubleClick')) { this.props.onDoubleClick(); }
  }

  onMouseEnter() {
    if (this.hasInProps('onMouseEnter')) { this.props.onMouseEnter(); }
  }

  onMouseLeave() {
    if (this.hasInProps('onMouseLeave')) { this.props.onMouseLeave(); }
  }

  onMouseUp() {
    if (this.hasInProps('onMouseUp')) { this.props.onMouseUp(); }
  }

  onMouseDown() {
    if (this.hasInProps('onMouseDown')) { this.props.onMouseDown(); }
  }

  render() {
    const {
      isDisabled,
      theme,
      href,
      text,
      children,
    } = this.props;

    return (
      <a href={href}>
        <button
          onClick={this.handleClick}
          onDoubleClick={this.handleDoubleClick}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          onMouseDown={this.handleMouseDown}
          onMouseUp={this.handleMouseUp}
          disabled={isDisabled}
          className={classNames('md-btn', `md-btn-${theme}`)}
        >
          {children}
        </button>
      </a>
    );
  }

}

MDButton.propTypes = {
  onClick: PropTypes.func,
  onDoubleClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onMouseUp: PropTypes.func,
  onMouseDown: PropTypes.func,

  isDisabled: PropTypes.bool,
  href: PropTypes.string,
  theme: PropTypes.string,
};

MDButton.defaultProps = {
  isDisabled: false,
  href: '#',
  theme: 'primary',
};

export default MDButton;
