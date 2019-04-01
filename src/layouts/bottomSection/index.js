import React from "react";
import PropTypes from "prop-types";
import Radium from "radium";
import { connect } from "react-redux";

import {
  darkGrey
} from "../../theme/variables";
import { labelDarkGrey } from "../../theme/mixins";

import {
  ConnectedPlayPauseButton,
  ConnectedStopButton,
  ConnectedTempoInput
} from "./connectedComponents";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class BottomSection extends React.Component {
  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  };

  render() {

    const BACKGROUND_PADDING = 10;


    const horizontalSeparatorStyle = thickness => ({
      height: thickness,
      backgroundColor: darkGrey,
    });

    const styles = {
      wrapper: {
        position: "relative",
      },
      controlWrapper: {
        position: "absolute",
        left: 0,
        top: BACKGROUND_PADDING,
      },
      leftSection: {
        position: "absolute",
        top: 0,
        left: 0,
        display: "flex",
        flexDirection: "row",
        alignItems: "stretch",
        padding: BACKGROUND_PADDING,
      },
      buttonWrapper: {
      },
      playPauseButton: {
        width: 48,
        height: 48
      },
      stopButton: {
        width: 48,
        height: 48
      },
      darkGreyButtonLabel: {
        ...labelDarkGrey,
        cursor: "inherit",
      },
      tempoLabel: {
        marginLeft: 15,
        marginHeight: 35,
        fontSize: "122%"
      },
      inputWrapper: {
        display: "table-cell",
        verticalAlign: "middle",
        height: 50,
        width: 220
      }
    };

    return (
      <div style={styles.wrapper}>
          <div style={styles.controlWrapper}>
            <div style={styles.leftSection}>
              <div style={horizontalSeparatorStyle(2)} />
              <div>
                <ConnectedPlayPauseButton style={styles.playPauseButton} />
              </div>
              <div>
                <ConnectedStopButton style={styles.stopButton}>
                  <FontAwesomeIcon icon="stop" />
                </ConnectedStopButton>
              </div>
              <div style={styles.inputWrapper}>
                <label style={styles.tempoLabel}>TEMPO: <ConnectedTempoInput /> BPM</label>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

// subscribe to the selectedMode state to identify unimplemented features
const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(Radium(BottomSection));