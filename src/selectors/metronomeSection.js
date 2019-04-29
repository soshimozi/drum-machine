import { createSelector } from "reselect";
import {getPlaying, getCurrentMeasure} from './common';

export default beatIndex => {
  return createSelector(
    [
      getPlaying,
      getCurrentMeasure
    ],
    (
      playing,
      currentMeasure
    ) => {

      console.log('currentMeasure', currentMeasure);
      
      return playing && ((currentMeasure % 4) === beatIndex);
    }
  );
};