const Ichord = new Audio("I CHORD.wav");
const iichord = new Audio('ii CHORD.wav');
const iiichord = new Audio('iii CHORD.wav');
const IVchord = new Audio("IV CHORD.wav");
const Vchord = new Audio('V CHORD.wav');
const vichord = new Audio('vi CHORD.wav');
const viichord = new Audio('vii° CHORD.wav');

const btnI = document.getElementById('1');
const btnii = document.getElementById('2');
const btniii = document.getElementById('3');
const btnIV = document.getElementById('4');
const btnV = document.getElementById('5')
const btnvi = document.getElementById('6')
const btnvii = document.getElementById('7')

const clearbtn = document.getElementById('clear')

btnI.addEventListener('click', ()=>{
  if (!Ichord.paused){
    Ichord.pause();
    Ichord.currentTime = 0;
    Ichord.play();
  }
  else {Ichord.play()}
});

btnii.addEventListener('click', ()=>{
  if (!iichord.paused){
    iichord.pause();
    iichord.currentTime = 0;
    iichord.play();
  }
  else {iichord.play()}
});

btniii.addEventListener('click', ()=>{
  if (!iiichord.paused){
    iiichord.pause();
    iiichord.currentTime = 0;
    iiichord.play();
  }
  else {iiichord.play()}
});

btnIV.addEventListener('click', ()=>{
  if (!IVchord.paused){
    IVchord.pause();
    IVchord.currentTime = 0;
    IVchord.play();
  }
  else {IVchord.play()}
  
});

btnV.addEventListener('click', ()=>{
  if (!Vchord.paused){
    Vchord.pause();
    Vchord.currentTime = 0;
    Vchord.play();
  }
  else {Vchord.play()}
});

btnvi.addEventListener('click', ()=>{
  if (!vichord.paused){
    vichord.pause();
    vichord.currentTime = 0;
    vichord.play();
  }
  else {vichord.play()}
});

btnvii.addEventListener('click', ()=>{
  if (!viichord.paused){
    viichord.pause();
    viichord.currentTime = 0;
    viichord.play();
  }
  else {viichord.play()}
});




const draggables = document.querySelectorAll('.draggable');
const container = document.querySelectorAll('.container');
const buttoncontainer = document.querySelectorAll('.button-container')
const copies = document.querySelector('.copy');


draggables.forEach(draggable => {
  
  draggable.addEventListener('mouseover', ()=> {
    draggable.classList.add('hover')

  });

  draggable.addEventListener('mouseleave', ()=> {
    draggable.classList.remove('hover')

  });


  draggable.addEventListener('dragstart', () => {
    draggable.classList.add('dragging')
    draggable.classList.add('copy')

  });

  draggable.addEventListener('dragend', () =>  {
    draggable.classList.remove('dragging');
    draggable.classList.remove('copy');
  });

});



container.forEach(container =>{
  container.addEventListener('dragover', e => {
    e.preventDefault();
    const draggable = document.querySelector('.dragging');
    container.appendChild(draggable);

  });
});



buttoncontainer.forEach(container =>{
  container.addEventListener('dragover', e => {
    e.preventDefault();
    const draggable = document.querySelector('.dragging');
    container.appendChild(draggable);
  });

});

/*  function getDragAfterElement(container, x) {
    const draggableList = 
    [...container.querySelectorAll('draggable:not(.dragging)')];

    draggableList.reduce()

  }
*/



function runplay() {

let interval = 2000;
let boxlngth = 
document.getElementById('box').childElementCount;
let elinbox = document.getElementById('box').getElementsByClassName('draggable');

for (let i=0; i<boxlngth; i++){
  setTimeout(()=>elinbox[i].click(), i*interval)
}};

const WAVEFORMS = [
  'sine',
  'square',
  'sawtooth',
  'triangle'

];

const sliderEl = document.querySelector('input[type="range"]');

const NOTES = {
  "A-0": 27.5,
  "A#0": 29.1352,
  "B-0": 30.8677,
  "C-1": 32.7032,
  "C#1": 34.6478,
  "D-1": 36.7081,
  "D#1": 38.8909,
  "E-1": 41.2034,
  "F-1": 43.6535,
  "F#1": 46.2493,
  "G-1": 48.9994,
  "G#1": 51.9131,
  "A-1": 55,
  "A#1": 58.2705,
  "B-1": 61.7354,
  "C-2": 65.4064,
  "C#2": 69.2957,
  "D-2": 73.4162,
  "D#2": 77.7817,
  "E-2": 82.4069,
  "F-2": 87.3071,
  "F#2": 92.4986,
  "G-2": 97.9989,
  "G#2": 103.826,
  "A-2": 110,
  "A#2": 116.541,
  "B-2": 123.471,
  "C-3": 130.813,
  "C#3": 138.591,
  "D-3": 146.832,
  "D#3": 155.563,
  "E-3": 164.814,
  "F-3": 174.614,
  "F#3": 184.997,
  "G-3": 195.998,
  "G#3": 207.652,
  "A-3": 220,
  "A#3": 233.082,
  "B-3": 246.942,
  "C-4": 261.626,
  "C#4": 277.183,
  "D-4": 293.665,
  "D#4": 311.127,
  "E-4": 329.628,
  "F-4": 349.228,
  "F#4": 369.994,
  "G-4": 391.995,
  "G#4": 415.305,
  "A-4": 440,
  "A#4": 466.164,
  "B-4": 493.883,
  "C-5": 523.251,
  "C#5": 554.365,
  "D-5": 587.33,
  "D#5": 622.254,
  "E-5": 659.255,
  "F-5": 698.456,
  "F#5": 739.989,
  "G-5": 783.991,
  "G#5": 830.609,
  "A-5": 880,
  "A#5": 932.328,
  "B-5": 987.767,
  "C-6": 1046.5,
  "C#6": 1108.73,
  "D-6": 1174.66,
  "D#6": 1244.51,
  "E-6": 1318.51,
  "F-6": 1396.91,
  "F#6": 1479.98,
  "G-6": 1567.98,
  "G#6": 1661.22,
  "A-6": 1760,
  "A#6": 1864.66,
  "B-6": 1975.53,
  "C-7": 2093,
  "C#7": 2217.46,
  "D-7": 2349.32,
  "D#7": 2489.02,
  "E-7": 2637.02,
  "F-7": 2793.83,
  "F#7": 2959.96,
  "G-7": 3135.96,
  "G#7": 3322.44,
  "A-7": 3520,
  "A#7": 3729.31,
  "B-7": 3951.07,
  "C-8": 4186.01
};

let osc;

document.querySelectorAll('button[data-note]').forEach((button) => {
  button.addEventListener('mousedown', ()=> {
    const actx = new (AudioContext || webkitAudioContext)();
    if (!actx) throw 'Audio not supported on this browser';
    const osc = actx.createOscillator();
    osc.type = WAVEFORMS[sliderEl.value];
    osc.frequency.value = NOTES[button.dataset.note];
    osc.connect(actx.destination);
    osc.start();
  
  button.addEventListener('mouseup', ()=>{
    
    osc.stop(actx.currentTime)
  
  });

  button.addEventListener('mouseleave', ()=>{
    
    osc.stop(actx.currentTime+0.2)
  
  });
});
});

{ let fired = false;
  
  
  document.addEventListener('keypress', (b)=>{
    if (!fired) {
      fired = true;
      let x = [...document.getElementsByClassName(b.code)];
      const actx = new (AudioContext || webkitAudioContext)();
      if (!actx) throw 'Audio not supported on this browser';
      const osc = actx.createOscillator();
      osc.type = WAVEFORMS[sliderEl.value];
      osc.frequency.value = NOTES[x[0].dataset.note];
      osc.connect(actx.destination);
      osc.start();
    

   document.addEventListener('keyup', ()=>{
    fired= false;
    osc.stop(actx.currentTime)
   })};
})};