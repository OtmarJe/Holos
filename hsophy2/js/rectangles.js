
// paperjs function: Slow Motion Rectangle
paperScript = function() {
	var mousePoint = view.center;
	var amount = 100;
	var colors = ['#A0AA7A', '#FFE4C4', '#F96565', '#DCAD37', '#5F9EA0', '#FF7F50', '#FFE4C4', '#DAA520','#F5F5DC'];

	for (var i = 0; i < amount; i++) {
		var rect = new Rectangle([0, 0], [100, 100]);
		rect.center = mousePoint;
		var path = new Path.Rectangle(rect, 7);
		path.fillColor = colors[i % 9];
		var scale = (1 - i / amount) * 30;
		path.scale(scale);
		
	}

	function onMouseMove(event) {
		mousePoint = event.point;
	}

	var children = project.activeLayer.children;

	function onFrame(event) {
		for (var i = 0, l = children.length; i < l; i++) {
			var item = children[i];
			var delta = (mousePoint - item.position) / (i + 5);
			item.rotate(Math.sin((event.count + i) / 20) * .1);
			if (delta.length > 0.01)
				item.position += delta;
		}
	}
 
  function onResize(event) {
    // Whenever the window is resized, the path recentered:
    path.position = view.center;
  }  
  
}

var a = document.createElement('script')
a.setAttribute('type', 'text/paperscript');
a.setAttribute('canvas', 'canvas');
var src = paperScript.toString();
a.appendChild(document.createTextNode(src.substring(src.indexOf('\n') + 1, src.lastIndexOf('\n'))));
document.body.appendChild(a);


/*


function changeGrid() {
  var title = document.querySelector("#wrapGrid");

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
}


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

// Make the DIV element draggable:
dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV: 
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}




*/


