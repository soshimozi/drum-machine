import React from "react";
import Radium from "radium";
import { connect } from "react-redux";

import {
  ConnectedMetronomeSections
} from "./connectedComponents";

class MetronomeSection extends React.Component {

  static generateMetronomeSections(
  ) {

    const metronomeSections = [];

    ConnectedMetronomeSections.forEach((Section, index) => {
      metronomeSections.push(
          <Section key={index} />
      );
    });

    return metronomeSections;
  }
    
  render() {

    return (

      <div className="control metronome">
        {MetronomeSection.generateMetronomeSections()}
      </div> 
    );
  }
}

// subscribe to the selectedMode state to identify unimplemented features
const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(Radium(MetronomeSection));