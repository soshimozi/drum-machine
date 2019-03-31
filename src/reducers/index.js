import {
  START_STOP_BUTTON_CLICK,
  TICK
} from '../actionTypes';

import initialState from "../initialState";


export default function(state, { type, payload }) {
  switch(type) {
    case TICK:
    {
      if (state.currentStep + 1 >= state.steps.length) {
        return state.merge({
          currentStep: 0
        });
      }

      return state.merge({
        currentStep: state.currentStep + 1
      });
    }

    case START_STOP_BUTTON_CLICK:
    {
      let newState = state;
      if (!state.playing) {
        newState = newState.merge({
          currentStep: -1
        });
      }

      return newState.merge({
        playing: !state.playing
      });    
    }

    default:
      return state;    
  }
}