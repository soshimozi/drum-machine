import WebAudioModule from "../webAudioModule";

import VCF, { LOWPASS } from "./vcf";
import VCA from "./vca";

class PulseTrigger {
  constructor(audioCtx) {
    const sampleRate = audioCtx.sampleRate;
    const pulseLength = 0.001 * sampleRate;

    this.buffer = audioCtx.createBuffer(1, pulseLength, sampleRate);
    this.data = this.buffer.getChannelData(0);
    for (var i = 0; i < this.data.length; i++) {
      this.data[i] = 1;
    }

    // smooth out buffer with filter
    this.vcf = new VCF(LOWPASS, audioCtx);
    this.vcf.frequency.value = 5000;

    // gain node (for external connections)
    this.gain = new VCA(audioCtx);
    this.gain.amplitude.value = 0.8;

    this.vcf.connect(this.gain);

    this.output = this.gain;
  }

  trigger(time, audioCtx) {
    const source = audioCtx.createBufferSource();
    source.buffer = this.buffer;
    source.connect(this.vcf.output);
    source.start(time);
  }
}

export default WebAudioModule(PulseTrigger);