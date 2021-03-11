
paperScript = function() {

}


var a = document.createElement('script')
a.setAttribute('type', 'text/paperscript');
a.setAttribute('canvas', 'canvas');
var src = paperScript.toString();
a.appendChild(document.createTextNode(src.substring(src.indexOf('\n') + 1, src.lastIndexOf('\n'))));
document.body.appendChild(a);


