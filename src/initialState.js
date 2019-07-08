import Immutable from "seamless-immutable";

import {
  BASS_DRUM,
  SNARE_DRUM,
  LOW_CONGA_LOW_TOM,
  MID_CONGA_MID_TOM,
  HI_CONGA_HI_TOM,
  CLAVES_RIMSHOT,
  MARACAS_HANDCLAP,
  COWBELL,
  CYMBAL,
  OPEN_HIHAT,
  CLSD_HIHAT,
  TRACK_COUNT,
  INSTRUMENT_COUNT
} from "./store-constants";

import { stepKey } from './helpers';

const initialInstrumentState = {
  [BASS_DRUM]: {
    level: 75,
    tone: 50,
    decay: 50,
  },
  [SNARE_DRUM]: {
    level: 75,
    tone: 50,
    snappy: 50,
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
  },
  [CLAVES_RIMSHOT]: {
    level: 75,
    selector: 1,
  },
  [MARACAS_HANDCLAP]: {
    level: 75,
    selector: 1,
  },
  [COWBELL]: {
    level: 75,
  },
  [CYMBAL]: {
    level: 75,
    tone: 50,
    decay: 50,
  },
  [OPEN_HIHAT]: {
    level: 75,
    decay: 50,
  },
  [CLSD_HIHAT]: {
    level: 75,
  },
}

const initialStepsState = (() => {
  const steps = {};
  for (let instrument = 0; instrument < INSTRUMENT_COUNT; instrument++) {
    for (let step = 0; step < TRACK_COUNT; step++) {
      const key = stepKey(instrument, step);
      steps[key] = false;
    }
  }
  return steps;
})();

const initialMuteState = (() => {
  const muting = {};
  for (let instrument = 0; instrument < INSTRUMENT_COUNT; instrument++) {
      muting[instrument] = true;
  }
  return muting;
})();

export default Immutable({
  steps: initialStepsState,
  muting: initialMuteState,
  currentStep: -1,
  currentMeasure: -1,
  playing: false,
  tempo: 60,
  masterVolume: 70,
  instrumentState: initialInstrumentState
});

