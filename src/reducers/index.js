import {
  PLAY_PAUSE_BUTTON_CLICK,
  TICK,
  TEMPO_CHANGED
} from '../actionTypes';


export default function(state, { type, payload }) {
  switch(type) {
    case TEMPO_CHANGED:
    {
      let newState = state;
      console.log('payload: ', payload);
      if(payload == "") payload = "0";

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
      if (state.currentStep + 1 >= state.steps.length) {
        return state.merge({
          currentStep: 0
        });
      }

      return state.merge({
        currentStep: state.currentStep + 1
      });
    }

    case PLAY_PAUSE_BUTTON_CLICK:
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