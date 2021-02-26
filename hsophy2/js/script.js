
// WrapGrid Animation

import { wrapGrid } from 'animate-css-grid';
 
const grid = document.querySelector(".grid");
const { unwrapGrid, forceGridAnimation } = wrapGrid(grid);

var element = document.getElementById("wrapGrid");
element.addEventListener("animationstart", listener, false);
element.addEventListener("animationend", listener, false);
element.addEventListener("animationiteration", listener, false);

element.className = "grid";


var Animation = function (wrapGrid) {
};

$('#trig').onClick( function (wrapGrid) {
  $('#soc').toggleClass('grid-tem-1 grid-item random');
  $('#try').toggleClass('grid-tem-2 grid-item random');
  $('#rela').toggleClass('grid-tem-3 grid-item random');
  $('#rig').toggleClass('grid-tem-4 grid-item random');
  $('#tak').toggleClass('grid-tem-5 grid-tem random');
  $('#mor').toggleClass('grid-tem-6 grid-item random');
  $('#age').toggleClass('grid-tem-7 grid-item random');
  $('#core').toggleClass('grid-tem-8 grid-item random');
  $('#inla').toggleClass('grid-tem-9 grid-item random');
  $('#holi').toggleClass('grid-tem-10 grid-item random');
  $('#tod').toggleClass('grid-tem-11 grid-item random');
  $('#larg').toggleClass('grid-tem-12 grid-item random');
  $('#if').toggleClass('grid-tem-13 grid-item random');
  $('#self').toggleClass('grid-tem-14 grid-item random');
  $('#infor').toggleClass('grid-tem-15 grid-item random');
  $('#holom').toggleClass('grid-tem-16 grid-item random');
});​


