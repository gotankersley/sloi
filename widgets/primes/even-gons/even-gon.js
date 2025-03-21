import {Slider} from '/lib/gfx2/gui.js';
import {Line, Circle} from '/lib/gfx2/draw.js';

const WIDTH = 600;
const HEIGHT = 600;
const CENTER_X = WIDTH/2;
const CENTER_Y = HEIGHT/2;


window.$n = Slider('n', 1, 100, 1, 1);
window.$radScale = Slider('radScale', 1, 100, 40, 1);
window.$pointSize = Slider('pointSize', 1, 100, 10, 1);



function ngonShape(n, x, y, size) {
	 
	ctx.beginPath();
	ctx.moveTo (x +  size * Math.cos(0), y +  size *  Math.sin(0));          

	for (var i = 1; i <= n;i += 1) {		
		var px = x + size * Math.cos(i * 2 * Math.PI / n);
		var py = y + size * Math.sin(i * 2 * Math.PI / n)
		ctx.lineTo (px, py);
	}

	ctx.closePath();
	ctx.fill();

}

function ngonPoint(i, n, x, y, size) {
	 		
	var px = x + size * Math.cos(i * 2 * Math.PI / n);
	var py = y + size * Math.sin(i * 2 * Math.PI / n)
	Circle(px, py, $pointSize);	
}

function ngonPath(n, x, y, size) {
	 
	ctx.beginPath();
	ctx.moveTo (x +  size * Math.cos(0), y +  size *  Math.sin(0));          

	for (var i = 1; i <= n;i += 1) {		
		var px = x + size * Math.cos(i * 2 * Math.PI / n);
		var py = y + size * Math.sin(i * 2 * Math.PI / n)
		ctx.lineTo (px, py);
	}

	ctx.closePath();
	ctx.stroke();

}

window.Render = function() {
	
	document.getElementById('drawing').width = WIDTH;
	document.getElementById('drawing').height = HEIGHT;
	ctx.clearRect(0, 0, WIDTH, HEIGHT);
    ctx.fillText($n, 10, 10);
	var lenN = Math.sqrt($n);
	
	
	//Axis
	ctx.strokeStyle = 'gray';
	Line(CENTER_X, 0, CENTER_X, HEIGHT);
	Line(0, CENTER_Y, WIDTH, CENTER_Y);
	
	
	ctx.strokeStyle = 'black';
	ctx.fillStyle = 'blue';
	for (var c = 2; c <= lenN; c++) {
		var circum = 2*c;
		var rad = c*$radScale;
		//Draw path
		ngonPath(circum, CENTER_X, CENTER_Y, rad);
		
		//Draw delta point		
		var delta = ($n-(c*c))%circum;
		ngonPoint(delta, circum, CENTER_X, CENTER_Y, rad);
		
	}
}

