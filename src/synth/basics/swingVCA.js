import WebAudioModule from "../webAudioModule";
import VCA from "../basics/vca";


import SoftClipper from "../effects/softClipper";

import HalfWaveRectifier from "../effects/halfWaveRectifier";

class SwingVCA {
  constructor(audioCtx) {
    this.rectifier = new HalfWaveRectifier(audioCtx);
    this.clipper = new SoftClipper(3, audioCtx);
    this.vca = new VCA(audioCtx);


    this.rectifier.connect(this.clipper);
    this.clipper.connect(this.vca);

    this.amplitude = this.vca.amplitude;

    this.input = this.rectifier.input;
    this.output = this.vca.output

  }
}

export default WebAudioModule(SwingVCA);