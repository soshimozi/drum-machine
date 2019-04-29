import React from "react";
import PropTypes from 'prop-types';
import Radium from "radium";

class Span extends React.Component {
  static propTypes = {
    active: PropTypes.bool,
  };

  render() {
    const {
      active = false
    } = this.props;

    if(active) {
      return (
        <span className='active'></span>
      );
    }

    return (
      <span></span>
    );
  }
}

export default Radium(Span);