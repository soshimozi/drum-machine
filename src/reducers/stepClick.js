
import { stepKey } from "../helpers";


export default (state, {drumId, index}) => {
  
  console.log('state after call', state);

  console.log('step clicked - drumId', drumId, 'stepNumber', index);

  const {
    playing
  } = state;

  if (playing) {
      const key = stepKey(
        drumId,
        index
      );

      console.log('about to flip step', index, 'instrument', drumId);

      return state.setIn(["steps", key], !state.steps[key]);
  }
};