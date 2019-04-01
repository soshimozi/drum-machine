import React from "react";
import PropTypes from 'prop-types';
import Radium from "radium";


class Input extends React.Component {
  static propTypes = {
    onChange: PropTypes.func,
    style: PropTypes.object,
    value: PropTypes.any
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.onChange();
  }

  render() {
    
    const {
      style,
      value,
      onChange = () => {}
    } = this.props;

    const styles = {
      input: {
        width: 55
      }
    };

    return (
      <input type="text" value={value} style={[styles.input, style]} onChange={onChange} />
    );
  }
}

export default Radium(Input);