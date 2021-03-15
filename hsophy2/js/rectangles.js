
// paperjs function: Slow Motion Rectangle
paperScript = function() {
	var mousePoint = view.center;
	var amount = 100;
	const colors = ['#A0AA7A', '#FFE4C4', '#F96565', '#DCAD37', '#5F9EA0', '#FF7F50', '#FFE4C4', '#DAA520','#F5F5DC'];

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



