import React from "react";
import PropTypes from 'prop-types';
import Radium from "radium";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Button extends React.Component {
  static propTypes = {
    onClick: PropTypes.func,
    style: PropTypes.object,
    disabled: PropTypes.bool,
    icon: PropTypes.object
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
      icon,
      disabled,
      onClick = () => {}
    } = this.props;
    
    const styles = {
      button: {
        width: 80,
        borderRadius: 5,
        height: 40,
        transition:
          "transform cubic-bezier(0.4, 0.0, 0.2, 1) .1s, opacity 0.5s",
        transform: "scale(1.0) translateZ(0)",
        ":hover": {
          cursor: "pointer",
          transform:
            style && style.transform
              ? style.transform
              : "scale(1.04) translateZ(0)",
          boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"
        },
        ":active": {
          transform:
            style && style.transform
              ? style.transform
              : "scale(1.0) translateZ(0)",
          boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"
        },
        userSelect: "none",

        // disabled styles
        pointerEvents: disabled ? "none" : "auto",
        opacity: disabled ? 0.5 : 1        
      }
    };

    return (
      <button style={[styles.button, style]} onClick={onClick}>
        <FontAwesomeIcon icon={icon} />
      </button>
    );
  }
}

export default Radium(Button);