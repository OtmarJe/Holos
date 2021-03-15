paperScript = function() {

    var values = {
        paths: 400,
        minPoints: 3,
        maxPoints: 10,
        minRadius: 20,
        maxRadius: 150
    };
    
    var hitOptions = {
        segments: true,
        stroke: true,
        fill: true,
        tolerance: 6
    };
    
    createPaths();
    
    function createPaths() {
        var radiusDelta = values.maxRadius - values.minRadius;
        var pointsDelta = values.maxPoints - values.minPoints;
        for (var i = 0; i < values.paths; i++) {
            var radius = values.minRadius + Math.random() * radiusDelta;
            var points = values.minPoints + Math.floor(Math.random() * pointsDelta);
            var path = createBlob(view.size * Point.random(), radius, points);
            var lightness = (Math.random() - 0.4) * 0.3 + 0.7;
            var hue = Math.random() * 310;
            path.fillColor = { hue: hue, saturation: 1, lightness: lightness };
            path.strokeColor = 'grey';
        };
    }
    
    function createBlob(center, maxRadius, points) {
        var path = new Path();
        path.closed = true;
        for (var i = 0; i < points; i++) {
            var delta = new Point({
                length: (maxRadius * 0.5) + (Math.random() * maxRadius * 0.5),
                angle: (360 / points) * i
            });
            path.add(center + delta);
        }
        path.smooth();
        return path;
    }
    
    var segment, path;
    var movePath = false;
    function onMouseDown(event) {
        segment = path = null;
        var hitResult = project.hitTest(event.point, hitOptions);
        if (!hitResult)
            return;
    
        if (event.modifiers.shift) {
            if (hitResult.type == 'segment') {
                hitResult.segment.remove();
            };
            return;
        }
    
        if (hitResult) {
            path = hitResult.item;
            if (hitResult.type == 'segment') {
                segment = hitResult.segment;
            } else if (hitResult.type == 'stroke') {
                var location = hitResult.location;
                segment = path.insert(location.index + 1, event.point);
                path.smooth();
            }
        }
        movePath = hitResult.type == 'fill';
        if (movePath)
            project.activeLayer.addChild(hitResult.item);
    }
    
    function onMouseMove(event) {
        project.activeLayer.selected = false;
        if (event.item)
            event.item.selected = true;
    }
    
    function onMouseDrag(event) {
        if (segment) {
            segment.point += event.delta;
            path.smooth();
        } else if (path) {
            path.position += event.delta;
        }
    }

}

var a = document.createElement('script')
a.setAttribute('type', 'text/paperscript');
a.setAttribute('canvas', 'canvas');
var src = paperScript.toString();
a.appendChild(document.createTextNode(src.substring(src.indexOf('\n') + 1, src.lastIndexOf('\n'))));
document.body.appendChild(a);
