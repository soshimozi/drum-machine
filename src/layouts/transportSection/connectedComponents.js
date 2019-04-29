import React from "react";
import { connect } from "react-redux";

import {
  onPlayButtonClick,
  onTempoChanged,
  onStopButtonClick
} from "../../actionCreators";

import AudioCtxContext from "../../audioCtxContext";

// Components
import Button from "../../components/button";
import Input from "../../components/input";

export const ConnectedTempoInput = (() => {

  const mapDispatchToProps = dispatch => ({
    onChange: evt => {
      dispatch(onTempoChanged(evt.currentTarget.value));
    }
  });

  const mapStateToProps = state => ({
    value: state.tempo
  });

  const ConnectedInput = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Input);

  return rootProps => (
    <ConnectedInput {...rootProps} />
  );

})();

export const ConnectedPlayPauseButton = (() => {

  const mapDispatchToProps = (dispatch, { requestInit }) => ({
    onClick: () => {
      requestInit();
      dispatch(onPlayButtonClick());
    },
  });

  const mapStateToProps = state => ({
  });

  const ConnectedButton = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Button);

  return rootProps => (
   <AudioCtxContext.Consumer> 
      {({ requestInit }) => (
        <ConnectedButton requestInit={requestInit} {...rootProps} />
      )}
    </AudioCtxContext.Consumer>
  );


})();

export const ConnectedStopButton = (() => {
  const mapDispatchToProps = (dispatch, { requestInit }) => ({
    onClick: () => {
      requestInit();
      dispatch(onStopButtonClick());
    },
  });

  const mapStateToProps = state => ({
  });

  const ConnectedButton = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Button);

  return rootProps => (
    <AudioCtxContext.Consumer>
      {({ requestInit }) => (
        <ConnectedButton requestInit={requestInit} {...rootProps} />
      )}
    </AudioCtxContext.Consumer>
  );
})();

