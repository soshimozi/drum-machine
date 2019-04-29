import { createSelector } from "reselect";

import {
  getMuting
} from "./common";

// returns a boolean value determining if the step button light is on or not
export function mute(instrumentId) {
  return createSelector(
    [
      getMuting
    ],
    (
      muting
    ) => {
      return muting[instrumentId];
    }
  );
}
