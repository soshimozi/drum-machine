import { createSelector } from "reselect";


import { stepKey } from "../helpers";

import {
  getCurrentStep,
  getPlaying,
  getSteps
} from "./common";

// returns a boolean value determining if the step button light is on or not
export function IsActive(drumId, stepNumber) {
  return createSelector(
    [
      getSteps
    ],
    (
      steps
    ) => {

      const currentStepKey = stepKey(
        drumId,
        stepNumber
      );
      return steps[currentStepKey];
    }
  );
}

export function IsPlaying(drumId, stepNumber) {
  return createSelector(
    [
      getPlaying,
      getCurrentStep
    ],
    (
      playing,
      currentStep
    ) => {

      if(playing) {
        return currentStep === stepNumber;
      }

      return false;
    }
  );  
}