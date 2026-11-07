/**
 * Music + UI sound effects.
 * Plays assets/audio/theme.mp3 when it exists, otherwise a small chiptune loop
 * generated with the Web Audio API. Browsers need a click first, so music
 * starts from the "PRESS START" button or the taskbar toggle.
 */
import { $ } from '../utils/dom.js';
import { storage } from '../utils/storage.js';

let bgm, musicBtn;
let ctx = null, master = null, timer = null, step = 0, nextTime = 0;
let mode = 'off'; // 'off' | 'file' | 'chip'

const midi = n => 440 * Math.pow(2, (n - 69) / 12);
const CHORDS = [
  [60, 64, 67, 72], // C
  [57, 60, 64, 69], // Am
  [53, 57, 60, 65], // F
  [55, 59, 62, 67]  // G
];
const ARPEGGIO = [0, 1, 2, 3, 2, 1, 2, 3];

function ensureContext() {
  if (!ctx) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
    master = ctx.createGain();
    master.gain.value = 0.07;
    master.connect(ctx.destination);
  }
  if (ctx.state === 'suspended') ctx.resume();
  return ctx;
}

function tone(freq, time, duration, type, volume = 1) {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  gain.gain.setValueAtTime(volume, time);
  gain.gain.exponentialRampToValueAtTime(0.001, time + duration);
  osc.connect(gain).connect(master);
  osc.start(time);
  osc.stop(time + duration + 0.02);
}

function schedule() {
  const stepLen = 0.2;
  while (nextTime < ctx.currentTime + 0.3) {
    const chord = CHORDS[Math.floor(step / 8) % CHORDS.length];
    const i = step % 8;
    tone(midi(chord[ARPEGGIO[i]]), nextTime, stepLen * 0.9, 'square', 0.6);
    if (i === 0 || i === 4) tone(midi(chord[0] - 24), nextTime, stepLen * 1.8, 'triangle', 1);
    if (i % 2 === 0) tone(midi(chord[3] + 12), nextTime, stepLen * 0.4, 'square', 0.15);
    step++;
    nextTime += stepLen;
  }
}

function startChiptune() {
  if (!ensureContext()) return;
  nextTime = ctx.currentTime + 0.05;
  timer = setInterval(schedule, 60);
  mode = 'chip';
}

function renderButton() {
  if (!musicBtn) return;
  const on = mode !== 'off';
  musicBtn.setAttribute('aria-pressed', String(on));
  musicBtn.textContent = on ? '♪ MUSIC: ON' : '♪ MUSIC: OFF';
}

export function startMusic() {
  if (mode !== 'off') return;
  const playing = bgm && bgm.play ? bgm.play() : null;
  if (playing && playing.then) {
    mode = 'file'; // optimistic; falls back to chiptune if the mp3 is missing
    playing.catch(() => { mode = 'off'; startChiptune(); renderButton(); });
  } else {
    startChiptune();
  }
  renderButton();
}

export function stopMusic() {
  if (bgm) bgm.pause();
  if (timer) { clearInterval(timer); timer = null; }
  mode = 'off';
  renderButton();
}

/** Short two-note "blip" for buttons. */
export function blip(freq = 880) {
  if (storage.get('music') === 'off' && mode === 'off') return;
  if (!ensureContext()) return;
  const t = ctx.currentTime;
  tone(freq, t, 0.08, 'square', 0.9);
  tone(freq * 1.5, t + 0.06, 0.1, 'square', 0.9);
}

/** True when the visitor has not switched music off on a previous visit. */
export const musicAllowed = () => storage.get('music') !== 'off';

export function initAudio() {
  bgm = $('#bgm');
  musicBtn = $('#musicBtn');
  if (!musicBtn) return;

  musicBtn.addEventListener('click', () => {
    if (mode === 'off') { storage.set('music', 'on'); startMusic(); }
    else { storage.set('music', 'off'); stopMusic(); }
  });

  document.addEventListener('click', e => {
    if (e.target.closest('[data-sfx], .btn, .nav a')) blip();
  });

  renderButton();
}
