import { createSelector } from "reselect";

import {
  getSteps
} from "./common";

export default createSelector(
  [getSteps],
  (steps) => {
    return steps.length || 0;
  }
);