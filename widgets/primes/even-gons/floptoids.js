import {Slider} from '/lib/gfx2/gui.js';
import {Circle} from '/lib/gfx2/draw.js';

const WIDTH = 1000;
const HEIGHT = 600;



window.$n = Slider('n', 0, 10000, 27, 1);
window.$scaleX = Slider('scaleX', 0, 100, 20, 0.01);
window.$scaleY = Slider('scaleY', 0, 100, 20, 0.01);


const PAT = '010000100000000100001000';

window.Render = function() {
	
	document.getElementById('drawing').width = WIDTH;
	document.getElementById('drawing').height = HEIGHT;
	ctx.clearRect(0, 0, WIDTH, HEIGHT);
	
	var lenN = Math.sqrt($n);
	
	ctx.strokeStyle = 'black';
	var str = '';
	for (var c = 2; c <= lenN; c++) {	
		
		var x = WIDTH-(c*$scaleX);
		
		
		
		var delta = $n - (c* Math.floor($n/c));
		ctx.fillStyle = 'yellow';
		for (var r = 0; r <= lenN; r++) {
			if (r == delta) str += '1';			
			else str += '0';
			
			var y = HEIGHT-(r*$scaleY);
			
			if (r == c) ctx.fillRect(x, y, $scaleX, $scaleY); //Diag
			else ctx.strokeRect(x, y, $scaleX, $scaleY); //Grid
			
		}
		
		//Draw delta point				
		var deltaY = HEIGHT-(delta*$scaleY)-(1*$scaleY);
		ctx.fillStyle = 'red';
		ctx.fillRect(x, deltaY, $scaleX, $scaleY);
		
	}
	//console.log(str);

}



