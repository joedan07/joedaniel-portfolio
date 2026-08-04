import { useEffect } from 'react';

// Ambient "console room tone", synthesized with WebAudio so no audio file is
// needed: filtered brown noise whose cutoff drifts slowly (the "drift"), over
// a faint two-note drone. Mounted graph only while enabled; fades in/out.
const AmbientDrift = ({ enabled, volume = 1 }) => {
  useEffect(() => {
    if (!enabled) return;
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    const ctx = new Ctx();

    // 4s looped brown-noise buffer
    const len = ctx.sampleRate * 4;
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = buf.getChannelData(0);
    let last = 0;
    for (let i = 0; i < len; i++) {
      const white = Math.random() * 2 - 1;
      last = (last + 0.02 * white) / 1.02;
      data[i] = last * 3.5;
    }
    const noise = ctx.createBufferSource();
    noise.buffer = buf;
    noise.loop = true;

    const lowpass = ctx.createBiquadFilter();
    lowpass.type = 'lowpass';
    lowpass.frequency.value = 320;
    lowpass.Q.value = 0.7;

    // slow drift of the filter cutoff
    const lfo = ctx.createOscillator();
    lfo.frequency.value = 0.05;
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 170;
    lfo.connect(lfoGain);
    lfoGain.connect(lowpass.frequency);

    const noiseGain = ctx.createGain();
    noiseGain.gain.value = 0.055;

    // faint machine drone: low root + slightly detuned fifth
    const drone1 = ctx.createOscillator();
    drone1.type = 'sine';
    drone1.frequency.value = 55;
    const drone2 = ctx.createOscillator();
    drone2.type = 'sine';
    drone2.frequency.value = 82.9;
    const droneGain = ctx.createGain();
    droneGain.gain.value = 0.016;

    // slow shimmer on the drone level
    const ampLfo = ctx.createOscillator();
    ampLfo.frequency.value = 0.11;
    const ampLfoGain = ctx.createGain();
    ampLfoGain.gain.value = 0.006;
    ampLfo.connect(ampLfoGain);
    ampLfoGain.connect(droneGain.gain);

    const master = ctx.createGain();
    master.gain.value = 0;

    noise.connect(lowpass);
    lowpass.connect(noiseGain);
    noiseGain.connect(master);
    drone1.connect(droneGain);
    drone2.connect(droneGain);
    droneGain.connect(master);
    master.connect(ctx.destination);

    noise.start();
    lfo.start();
    drone1.start();
    drone2.start();
    ampLfo.start();
    master.gain.setTargetAtTime(volume, ctx.currentTime, 0.9);

    return () => {
      master.gain.setTargetAtTime(0, ctx.currentTime, 0.25);
      setTimeout(() => {
        try {
          noise.stop();
          lfo.stop();
          drone1.stop();
          drone2.stop();
          ampLfo.stop();
        } catch {
          /* already stopped */
        }
        ctx.close().catch(() => {});
      }, 1000);
    };
  }, [enabled, volume]);

  return null;
};

export default AmbientDrift;
