import React from "react";
import Radium from "radium";
import { connect } from "react-redux";
import {
  BASS_DRUM,
  LOW_CONGA_LOW_TOM,
  MID_CONGA_MID_TOM,
  HI_CONGA_HI_TOM,
  COWBELL
} from "../../store-constants";

import {
  ConnectedStepButtons,
  ConnectedMuteButton,
  ConnectedChannelButton
} from "./connectedComponents";

class SequencerSection extends React.Component {

  static generateStepButtons(drumId) {
    const labeledButtons = [];

    ConnectedStepButtons(drumId).forEach((ConnectedStepButton, index) => {
      labeledButtons.push(
        <ConnectedStepButton key={`stepbutton-${drumId}-${index}`} />
      );
    });

    return labeledButtons;
  }

  static generateMuteButton(instrumentId) {
    return ConnectedMuteButton(instrumentId)();
  }

  static generateChannelButton(instrumentId, letter) {
    return ConnectedChannelButton(instrumentId, letter)();
  }

  render() {
    
    var divOffStyle = {
      transform: 'scaleX(0)'
    };

    return (
      <div className="sequencer-channels">
        <div className="channel">
          {SequencerSection.generateMuteButton(BASS_DRUM)}
          {SequencerSection.generateChannelButton(BASS_DRUM, 'B')}
          <div className="control meter vertical">
            <span className="fade" style={divOffStyle}></span>
          </div>
          <div className="seq-row inline">
            {SequencerSection.generateStepButtons(BASS_DRUM)}
          </div>
        </div>
        <div className="sep"></div>
        <div className="channel">
          {SequencerSection.generateMuteButton(LOW_CONGA_LOW_TOM)}
          {SequencerSection.generateChannelButton(LOW_CONGA_LOW_TOM, 'To')}
          <div className="control meter vertical">
            <span className="fade" style={divOffStyle}></span>
          </div>
          <div className="seq-row inline">
            {SequencerSection.generateStepButtons(LOW_CONGA_LOW_TOM)}
          </div>
        </div>
        <div className="sep"></div>
        <div className="channel">
          {SequencerSection.generateMuteButton(MID_CONGA_MID_TOM)}
          {SequencerSection.generateChannelButton(MID_CONGA_MID_TOM, 'M')}
          <div className="control meter vertical">
            <span className="fade" style={divOffStyle}></span>
          </div>
          <div className="seq-row inline">
            {SequencerSection.generateStepButtons(MID_CONGA_MID_TOM)}
          </div>
        </div>
        <div className="sep"></div>   
        <div className="channel">
          <button className="control mute active"></button>
          {SequencerSection.generateChannelButton(HI_CONGA_HI_TOM, 'H')}
          <div className="control meter vertical">
            <span className="fade" style={divOffStyle}></span>
          </div>
          <div className="seq-row inline">
            {SequencerSection.generateStepButtons(HI_CONGA_HI_TOM)}
          </div>
        </div>
        <div className="sep"></div>   
        <div className="channel">
        {SequencerSection.generateMuteButton(COWBELL)}
          {SequencerSection.generateChannelButton(COWBELL, 'Cb')}
          <div className="control meter vertical">
            <span className="fade" style={divOffStyle}></span>
          </div>
          <div className="seq-row inline">
            {SequencerSection.generateStepButtons(COWBELL)}
          </div>
        </div>
        <div className="sep"></div>   
     </div>
    );
  }
}

// subscribe to the selectedMode state to identify unimplemented features
const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(Radium(SequencerSection));