import React from "react";
import PropTypes from 'prop-types';
import Radium from "radium";
import classNames  from 'classnames';

class StepButton extends React.Component {
  static propTypes = {
    onClick: PropTypes.func,
    active: PropTypes.bool,
    playing: PropTypes.bool
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
      onClick = () => {},
      active,
      playing
    } = this.props;

    const stepButtonClasses = classNames(
      {
        'seq-playhead': playing,
        'seq-note': active
      }
    );

    return (
      <span onClick={onClick} className={stepButtonClasses}>
      </span>
    );
  }
}

export default Radium(StepButton);