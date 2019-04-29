import {
  STOP_BUTTON_CLICK,
  PLAY_BUTTON_CLICK,
  TICK,
  TEMPO_CHANGED,
  STEP_BUTTON_CLICK,
  MUTE_BUTTON_CLICK
} from '../actionTypes';

import stepClickReducer from "./stepClick";


import { stepKey } from "../helpers";

export default function(state, { type, payload }) {
  switch(type) {
     case MUTE_BUTTON_CLICK: 
     {
        return state.setIn(["muting", payload], !state.muting[payload]);
     }
     
     case STEP_BUTTON_CLICK:
     {
       const {
         drumId,
         index
       } = payload;

       const key = stepKey(
        drumId,
        index
      );

      return state.setIn(["steps", key], !state.steps[key]);
    }
    
    case TEMPO_CHANGED:
    {
      let newState = state;
      console.log('payload: ', payload);
      if(payload === "") payload = "0";

      let newTempo = parseInt(payload);
      if(newTempo < 1) {
        newTempo = 1;
      }
      
      return newState.merge({
        tempo: newTempo
      });
    }

    case TICK:
    {
      if (state.currentStep + 1 >= 16) {
        return state.merge({
          currentStep: 0
        });
      }

      let measure = state.currentMeasure;

      console.log('currentStep', state.currentStep);
      if(state.currentStep % 4 === 0) {
        measure = measure + 1;
      }

      return state.merge({
        currentStep: state.currentStep + 1,
        currentMeasure: measure
      });
    }

    case STOP_BUTTON_CLICK:
    {
      let newState = state;
      if (state.playing) {
        newState = newState.merge({
          currentStep: -1,
          currentMeasure: -1
        });
      }

      return newState.merge({
        playing: false
      });        
    }

    case PLAY_BUTTON_CLICK:
    {
      let newState = state;
      if (state.playing) {
        newState = newState.merge({
          currentStep: -1,
          currentMeasure: -1
        });
      }

      return newState.merge({
        playing: true
      });    
    }

    default:
      return state;    
  }
}