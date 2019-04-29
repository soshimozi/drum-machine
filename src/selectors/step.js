import { createSelector } from "reselect";

import { getCurrentStep } from "./common";
import patternLengthSelector from "./patternLength";

export default createSelector(
  [getCurrentStep, patternLengthSelector],
  (currentStep, patternLength) => {
      return currentStep % 16;
  }
);
