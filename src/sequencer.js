import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";

import { onTick  } from "./actionCreators";
import AudioCtxContext from "./audioCtxContext";


class Sequencer extends React.Component {

  static propTypes = {
    storeState: PropTypes.object,
    handleTick: PropTypes.func,
    getAudioContext: PropTypes.func,
    getClock: PropTypes.func,
  };

  handleTick({ deadline }) {
    const clock = this.props.getClock();
    const audioCtx = this.props.getAudioContext();
  }

  constructor(props) {
    super(props);

    this.state = {
      tickEvent: null
    };

    this.handleTick = this.handleTick.bind(this);
  }  

  render() {
    return false;
  }
}

// connect to redux store
const mapStateToProps = state => ({
  storeState: state,
});

const mapDispatchToProps = dispatch => ({
  handleTick: () => dispatch(onTick())
});

const ConnectedSequencer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sequencer);


export default () => (
  <AudioCtxContext.Consumer>
    {childProps => <ConnectedSequencer {...childProps} />}
  </AudioCtxContext.Consumer>
);
