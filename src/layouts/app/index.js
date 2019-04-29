// External Deps
import React from "react";
import Radium from "radium";

import TransportSection from "../transportSection";
import MetronomeSection from "../metronomeSection";

import SequencerSection from "../sequencerSection";

class AppLayout extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {

    var divOffStyle = {
      transform: 'scaleX(0)'
    };

    return (
      <div id="app" className="">
        <div className="app-region" id="r-head">
          <h3>Metronome</h3>
          <MetronomeSection />
        </div>
        <div className="app-region" id="r-top">
          <h3>Transport</h3>
          <TransportSection />
        </div>
        <div className="app-region" id="r-mid">
          <div className="module sequencer">
            <h3>Sequencer</h3>
            <SequencerSection />
          </div>        
        </div>
        <div className="app-region" id="r-bottom"></div>
        <div className="app-region" id="r-footer"></div>
      </div>
    );
  }
}


export default Radium(AppLayout);
