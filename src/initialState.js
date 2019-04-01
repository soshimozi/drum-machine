import Immutable from "seamless-immutable";

import {
  BASS_DRUM
} from "./store-constants";

const initialInstrumentState = {
  [BASS_DRUM]: {
    level: 75,
    tone: 50,
    decay: 50,
  }
}

export default Immutable({
  steps: [1, 0, 1, 0, 1, 1, 1, 0],
  currentStep: 0,
  playing: false,
  tempo: 90,
  masterVolume: 70,
  instrumentState: initialInstrumentState
});

