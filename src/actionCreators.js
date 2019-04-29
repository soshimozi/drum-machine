

import {
  STOP_BUTTON_CLICK,
  PLAY_BUTTON_CLICK,
  STEP_BUTTON_CLICK,
  TICK,
  TEMPO_CHANGED,
  MUTE_BUTTON_CLICK,
  CHANNEL_BUTTON_CLICK
} from "./actionTypes";

export const onTick = () => ({
  type: TICK
});

export const onPlayButtonClick = () => ({
  type: PLAY_BUTTON_CLICK
});

export const onTempoChanged = value  => ({
  type: TEMPO_CHANGED,
  payload: value
});

export const onStopButtonClick = () => ({
  type: STOP_BUTTON_CLICK
});

export const onMuteButtonClick = (instrumentId) => ({
  type: MUTE_BUTTON_CLICK,
  payload: instrumentId
});

export const onStepButtonClick = (drumId, index) => ({
  type: STEP_BUTTON_CLICK,
  payload: {drumId, index}
});

export const onChannelButtonClick = (instrumentId) => ({
  type: CHANNEL_BUTTON_CLICK,
  payload: instrumentId
});