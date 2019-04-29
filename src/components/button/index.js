import React from "react";
import PropTypes from 'prop-types';
import Radium from "radium";

class Button extends React.Component {
  static propTypes = {
    onClick: PropTypes.func,
    style: PropTypes.object,
    className: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick();
  }

  render() {
    const {
      style,
      children,
      className,
      onClick = () => {}
    } = this.props;

    return (
      <button style={style} onClick={onClick} className={className}>
        {children}
      </button>
    );
  }
}

export default Radium(Button);