import WebAudioModule from "../webAudioModule";

// filter types
export const LOWPASS = "lowpass";
export const HIGHPASS = "highpass";
export const BANDPASS = "bandpass";

class VCF {
  constructor(type, audioCtx) {
    this.filter = audioCtx.createBiquadFilter();

    this.filter.frequency.value = 400;
    this.filter.Q.value = 1;

    this.filter.type = type;

    // wet WEbAudioModule requirements
    this.input = this.filter;
    this.output = this.filter;

    // make parameters avaialble for connection
    this.frequency = this.filter.frequency;
    this.Q = this.filter.Q;
  }
}

export default WebAudioModule(VCF);
