import Immutable from "seamless-immutable";

import {
  BASS_DRUM,
  LOW_CONGA_LOW_TOM,
  MID_CONGA_MID_TOM,
  HI_CONGA_HI_TOM, 
} from "./store-constants";

const initialInstrumentState = {
  [BASS_DRUM]: {
    level: 75,
    tone: 50,
    decay: 50,
  },
  [LOW_CONGA_LOW_TOM]: {
    level: 75,
    tuning: 50,
    selector: 1,
  },
  [MID_CONGA_MID_TOM]: {
    level: 75,
    tuning: 50,
    selector: 1,
  },
  [HI_CONGA_HI_TOM]: {
    level: 75,
    tuning: 50,
    selector: 1,
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

