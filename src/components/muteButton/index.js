import React from "react";
import PropTypes from 'prop-types';
import Radium from "radium";
import classNames from 'classnames';

class MuteButton extends React.Component {
  static propTypes = {
    onClick: PropTypes.func,
    active: PropTypes.bool
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('click!');
    
    this.props.onClick();
  }

  render() {
    const {
      onClick = () => {},
      active
    } = this.props;

    const muteButtonClasses = classNames(
      'control',
      'mute',
      {
        'active': active
      }
    );

    return (
      <button onClick={onClick} className={muteButtonClasses}>
      </button>
    );
  }
}

export default Radium(MuteButton);