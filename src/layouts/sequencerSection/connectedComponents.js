import React from "react";
import { connect } from "react-redux";

import StepButton from "../../components/stepButton";
import MuteButton from "../../components/muteButton";

import AudioCtxContext from "../../audioCtxContext";

import {
  onStepButtonClick,
  onMuteButtonClick
} from "../../actionCreators";

import {IsActive, IsPlaying } from "../../selectors/stepButton";
import { mute } from "../../selectors/muteButton";

export const ConnectedStepButtons = ((drumId) => {

  const buttons = [];

  for (let i = 0; i < 16; i++) {
    const activeSelector = IsActive(drumId, i);
    const playingSelector = IsPlaying(drumId, i);

    const mapStateToProps = state => ({
      active: activeSelector(state),
      playing: playingSelector(state)
    });

    const mapDispatchToProps = dispatch => ({
      onClick: () => dispatch(onStepButtonClick(drumId, i))
    });

    buttons.push(
      connect(
        mapStateToProps,
        mapDispatchToProps
      )(StepButton)
    );
  }

  return buttons;
});

export const ConnectedMuteButton = ((channelId) => {

  const mapDispatchToProps = (dispatch, { requestInit }) => ({
    onClick: () => {
      requestInit();
      dispatch(onMuteButtonClick(channelId));
    },
  });

  const muteSelector = mute(channelId);
  const mapStateToProps = state => ({
    active: muteSelector(state)
  });

  const ConnectedButton = connect(
    mapStateToProps,
    mapDispatchToProps
  )(MuteButton);

  return rootProps => (
    <AudioCtxContext.Consumer>
      {({ requestInit }) => (
        <ConnectedButton requestInit={requestInit} {...rootProps} />
      )}
    </AudioCtxContext.Consumer>
  );

});