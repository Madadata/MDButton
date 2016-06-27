import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import './MDButton.css';

class MDButton extends Component {

  constructor() {
    super();
  }

  hasInProps(propName) {
    return propName in this.props;
  }

  getButton() {
    const buttonProps = {};
    let theme = 'default';
    if (this.hasInProps('onClick')) { buttonProps.onClick = this.props.onClick; }
    if (this.hasInProps('onDoubleClick')) { buttonProps.onDoubleClick = this.props.onDoubleClick; }
    if (this.hasInProps('onMouseEnter')) { buttonProps.onMouseEnter = this.props.onMouseEnter; }
    if (this.hasInProps('onMouseLeave')) { buttonProps.onMouseLeave = this.props.onMouseLeave; }
    if (this.hasInProps('onMouseUp')) { buttonProps.onMouseUp = this.props.onMouseUp; }
    if (this.hasInProps('onMouseDown')) { buttonProps.onMouseDown = this.props.onMouseDown; }
    if (this.hasInProps('isDisabled')) { buttonProps.isDisabled = this.props.isDisabled; }
    if (this.hasInProps('theme')) { theme = this.props.theme; }

    return (
      <button
        {...buttonProps}
        className={classNames('md-btn', `md-btn-${theme}`)}
      >
        {this.props.children}
      </button>
    );
  }

  render() {
    const button = this.getButton();
    const { href } = this.props;
    const content = !!href ? <a href={href}>{button}</a> : button;
    return content;
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

export default MDButton;
