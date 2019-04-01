import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from "react-redux";
import Loadable from "react-loadable";

import store from "./store";


// Add a warning to Firefox users due to a buggy AudioParam implementation
import browser from "bowser";

import AppLayout from "./layouts/app";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faStop, faPlay, faPause } from '@fortawesome/free-solid-svg-icons'

library.add(faStop, faPlay, faPause)

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