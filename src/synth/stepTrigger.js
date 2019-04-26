import {
  BASS_DRUM,
  LOW_CONGA_LOW_TOM,
  MID_CONGA_MID_TOM,
  HI_CONGA_HI_TOM
} from "../store-constants";

import bassDrum from '../synth/drumModules/bassDrum';

import tomConga from "synth/drumModules/tomConga";

import VCA from "../synth/basics/vca";

import stepSelector from "../selectors/step";

const drumModuleMapping = [
  [BASS_DRUM, bassDrum],

  [LOW_CONGA_LOW_TOM, tomConga("low")],
  [MID_CONGA_MID_TOM, tomConga("mid")],
  [HI_CONGA_HI_TOM, tomConga("high")], 
];

/*
 * Store a cache of the previous output VCAs so that we can silence them before the new drum is triggered
 *
 * NOTE: this is a bit of a hack and adds state mutation to the trigger step but it's self contained enough that I
 * don't think it should cause to many issues
 */
const previousTriggers = {
  [BASS_DRUM]: null,

  [SNARE_DRUM]: null,
  [LOW_CONGA_LOW_TOM]: null,
  [MID_CONGA_MID_TOM]: null,
  [HI_CONGA_HI_TOM]: null, 
};

export default function(storeState, deadline, destination, clock, audioCtx) {
  const currentStep = stepSelector(storeState);

  const accentGain = 0.7;

  const accentVCA = new VCA(audioCtx);
  accentVCA.amplitude.value = accentGain;
  accentVCA.connect(destination);

  // accentVCA cleanup
  window.setTimeout(
    () => accentVCA.disconnect,
    deadline - audioCtx.currentTime + 2000
  );  

  drumModuleMapping.forEach(([drumID, drumModuleTrigger]) => {

    if (storeState.steps[currentStep]) {

      // set gain on previous triggers to zero
      if(previousTriggers[drumID] != null) {
        const prevModule = previousTriggers[drumID];

        prevModule.amplitude.cancelScheduledValues(audioCtx.currentTime);
        prevModule.amplitude.setValueAtTime(prevModule.amplitude.value, audioCtx.currentTime);

        prevModule.amplitude.linearRampToValueAtTime(0, deadline);

         // remove reference from cache to let the garbage collector know to clean it up
         previousTriggers[drumID] = null;
      }

      const drumState = storeState.instrumentState[drumID];

      previousTriggers[drumID] = drumModuleTrigger(
        audioCtx,
        accentVCA,
        deadline,
        drumState
      );
    }    
  });
}