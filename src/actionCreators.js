

import {
  PLAY_PAUSE_BUTTON_CLICK,
  TICK,
  TEMPO_CHANGED
} from "./actionTypes";

export const onTick = () => ({
  type: TICK
});

export const onPlayPauseButtonClick = () => ({
  type: PLAY_PAUSE_BUTTON_CLICK
});

export const onTempoChanged = value  => ({
  type: TEMPO_CHANGED,
  payload: value
});