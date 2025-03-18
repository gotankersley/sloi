import {Slider} from '/lib/gfx2/gui.js';

const WIDTH = 1200;
const HEIGHT = 1000;
const CENTER_X = WIDTH/2;
const CENTER_Y = HEIGHT/2;
const DOOR_SEED = Math.floor(Math.random()*2);

window.$offsetX = Slider('offsetX', -1000,1000, 0, 1);
window.$offsetY = Slider('offsetY', -1000,1000, 0, 1);
window.$rows = Slider('rows', 1,50, 3, 1);
window.$rowOffset = Slider('rowOffset', 1,100, 10, 1);
window.$cols = Slider('cols', 1,100, 3, 1);
window.$wallWidth = Slider('wallWidth', 1,200, 10, 1);
window.$wallHeight = Slider('wallHeight', 1,200, 10, 1);
window.$doorWidth = Slider('doorWidth', 1,200, 5, 1);
window.$doorHeight = Slider('doorHeight', 1,200, 5, 1);
window.$slant = Slider('slant', 1,100, 10, 1);
window.$outline = Slider('outline', 0,20, 1, 1);


const COLORS = [
	'#edb347',//Orange,
	'#f0e990', //Yellow
	'#f5f4ed', //Off-white,
	'#916c54', //Brown	
];

window.Render = function() {
	document.getElementById('drawing').width = WIDTH;
	document.getElementById('drawing').height = HEIGHT;
	ctx.clearRect(0, 0, WIDTH, HEIGHT);	
	ctx.save();
	ctx.translate($offsetX, $offsetY);
		

	var id;
	for (var r = 0; r < $rows; r++) {
		var y = (r*$rowOffset)+$wallHeight;
		for (var c = 0; c < $cols; c++){
			var x = c*$wallWidth;
			id = (r*$rows)+c;
			if (r % 2 == 0) x+= $wallWidth;
			if (c % 2 == 0){				
				x += $wallWidth;
				if (c > 0 || r % 2 == 0  ) drawWallLeft(id, x, y); //Left-Lo, Right-Hi 	
			}
			else {					
				drawWallRight(id, x+$wallWidth, y); //Left-Hi, Right-Lo 						
			}						
		}
		if (r % 2 != 0) drawWallRight(id, x+$wallWidth, y); //Left-Hi, Right-Lo 
			

	}
	ctx.restore();
}

function drawWallLeft(id, x, y) {
	var color = COLORS[id%4];
	var hasDoor = ((id+DOOR_SEED) % 2 == 0)? true : false;
	var ol = $outline*2;
	WallPathLeft(x-$outline, y+$outline, $wallWidth+ol, $wallHeight+ol, $doorWidth-ol, $doorHeight-$outline, 'black', hasDoor);
	WallPathLeft(x, y, $wallWidth, $wallHeight, $doorWidth, $doorHeight, color, hasDoor);
}

function drawWallRight(id, x, y) {
	var color = COLORS[id%4];
	var hasDoor = ((id+DOOR_SEED) % 3 == 0)? true : false;
	var ol = $outline*2;
	WallPathRight(x-$outline, y+$outline, $wallWidth+ol, $wallHeight+ol, $doorWidth-ol, $doorHeight-$outline, 'black', hasDoor);
	WallPathRight(x, y, $wallWidth, $wallHeight, $doorWidth, $doorHeight, color, hasDoor);
}

function WallPathLeft(x, y, wallW, wallH, doorW, doorH, color, hasDoor) {
	doorW = Math.min(wallW, doorW);
	doorH = Math.min(wallH, doorH);
	var halfW = wallW/2;
	var halfD = doorW/2;
	var originX = x+halfW;
	var dy = (halfW-halfD)*$slant/wallW;
	var dy2 = (wallW-(halfW-halfD))*$slant/wallW;
	
	
	ctx.fillStyle = color;
	ctx.beginPath();
	ctx.moveTo(x, y); //BL
	ctx.lineTo(x, y-wallH); //TL
	ctx.lineTo(x+wallW, y-(wallH+$slant)); //TR
	ctx.lineTo(x+wallW, y-$slant); //BR
		
	if (hasDoor) {
		ctx.closePath();
		ctx.fill();
	
		//Door
		ctx.moveTo(originX+halfD, y-dy2); //BR	
	}
	else ctx.lineTo(originX+halfD, y-dy2); //BR	
	ctx.lineTo(originX+halfD, (y-dy2)-(doorH)); //TR
	ctx.lineTo(originX-halfD, (y-dy)-doorH); //TL
	ctx.lineTo(originX-halfD, y-dy); //BL		
	
	
	ctx.closePath();
	ctx.fill();
	
} 

function WallPathRight(x, y, wallW, wallH, doorW, doorH, color, hasDoor) {
	doorW = Math.min(wallW, doorW);
	doorH = Math.min(wallH, doorH);
	var halfW = wallW/2;
	var halfD = doorW/2;
	var originX = x+halfW;
	var dy = (halfW-halfD)*$slant/wallW;
	var dy2 = (wallW-(halfW-halfD))*$slant/wallW;
	
	
	ctx.fillStyle = color;
	ctx.beginPath();
	ctx.moveTo(x, y-$slant); //BL
	ctx.lineTo(x, y-(wallH+$slant)); //TL
	ctx.lineTo(x+wallW, y-wallH); //TR
	ctx.lineTo(x+wallW, y); //BR
	
	if (hasDoor) {
		ctx.closePath();
		ctx.fill();
	
		//Door	
		ctx.fillStyle = '#000';	
		ctx.beginPath();
		ctx.moveTo(originX+halfD, y-dy); //BR
	}
	else ctx.lineTo(originX+halfD, y-dy); //BR
	
	ctx.lineTo(originX+halfD, (y-dy)-(doorH)); //TR
	ctx.lineTo(originX-halfD, (y-dy2)-doorH); //TL
	ctx.lineTo(originX-halfD, y-dy2); //BL			
	
	
	ctx.closePath();
	ctx.fill();
	
} 

