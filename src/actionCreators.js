

import {
  START_STOP_BUTTON_CLICK,
  TICK
} from "./actionTypes";

export const onTick = () => ({
  type: TICK
});

export const onStartStopButtonClick = () => ({
  type: START_STOP_BUTTON_CLICK
});