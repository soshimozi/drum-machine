import React from "react";
import PropTypes from 'prop-types';
import Radium from "radium";

class Button extends React.Component {
  static propTypes = {
    onClick: PropTypes.func,
    letter: PropTypes.string
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
      letter,
      onClick = () => {}
    } = this.props;

    return (
      <button onClick={onClick} className="control pad">{letter}</button>
    );
  }
}

export default Radium(Button);