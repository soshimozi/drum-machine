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
      className,
      size,
      min,
      max,
      onChange = () => {}
    } = this.props;

    return (
      <input className={className} type="text" size={size} min={min} max={max} value={value} style={style} onChange={onChange} />
    );
  }
}

export default Radium(Input);