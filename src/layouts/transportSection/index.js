import React from "react";
import Radium from "radium";
import { connect } from "react-redux";

import {
  ConnectedPlayPauseButton,
  ConnectedStopButton,
  ConnectedTempoInput
} from "./connectedComponents";

class TransportSection extends React.Component {

  render() {

    return (
      <div className="module transport">
        <ConnectedPlayPauseButton className="transport-play" title="Play">&#9658;</ConnectedPlayPauseButton> <ConnectedStopButton className="transport-stop" title="Stop">&#9632;</ConnectedStopButton> <ConnectedTempoInput size="3" min="30" max="250" value="130" className="transport-tempo"></ConnectedTempoInput>
      </div>
    );
  }
}

// subscribe to the selectedMode state to identify unimplemented features
const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(Radium(TransportSection));