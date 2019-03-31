import React from 'react';
import ReactDOM from 'react-dom';
import WAAClock from 'waaclock';

import { render } from "react-dom";
import { Provider } from "react-redux";
import Loadable from "react-loadable";

import store from "./store";


// Add a warning to Firefox users due to a buggy AudioParam implementation
import browser from "bowser";

import AppLayout from "./layouts/app";

require("./globalStyles/reset.css");
require("./globalStyles/main.css");

if (browser.gecko) {
  window.alert(
    "WARNING: Firefox currently has a buggy Web Audio API implementation which causes loud pops and clicks, continue at your own risk"
  );
}

const Sequencer = Loadable({
  loader: () => import("./sequencer"),
  loading: () => null,
});


// class DrumMachine extends React.Component {
//   state = { steps: [0,0,0,0], currentStep: 0, playing: false};

//   handlePlayPress() {

//   }

//   render() {
//     const {steps, currentStep, playing} = this.state;

//     return (
//       <div className='sequencer-wrapper'>
//         <div className='step-display'>
//         {`Current Step: ${currentStep % steps.length}`}
//         </div>
//         <button
//           className='play-button'
//           onClick={() => this.handlePlayPress()}
//         >
//         {playing ? 'Stop' : 'Play'}
//         </button>
//       </div>
//     );
//   }

//   componentDidMount() {
//     this.context = new window.AudioContext();
//     this.clock = new WAAClock();
//   }
// }


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div style={{ width: "100%", height: "100%" }}>
          <Sequencer />
          <AppLayout />
        </div>
      </Provider>
    );
  }
}

ReactDOM.render( 
  <App />,
  document.querySelector('#root')
);