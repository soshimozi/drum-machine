import WebAudioModule from '../webAudioModule';

class VCA {
  constructor(audioCtx) {
    this.gain = audioCtx.createGain();

    // set initial gain value
    this.gain.gain.value = 0;

    // set WebAudioModule requirements
    this.input = this.gain;
    this.output = this.gain;

    this.amplitude = this.gain.gain;
  }
}

export default WebAudioModule(VCA);