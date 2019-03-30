import {
  TICK
} from '../actionTypes';

import initialState from "../initialState";


export default function(state, { type, payload }) {
  switch(type) {
    case TICK:
    {
      if (state.currentStep + 1 >= this.state.steps.length) {
        return state.merge({
          currentStep: 0
        });
      }

      return state.merge({
        currentStep: state.currentStep + 1
      });
    }

    default:
      return state;    
  }
}