import * as THREE from '/lib/gfx3/three.module.js';
import { GUI } from '/lib/gfx3/dat.gui.module.js';


var scene;
var $;
var matPrime;
var matLine;
var matNorm;
var matSel;
var matAxis;
var matRadLine;

var geoOrigin;

var geoPlane;

export function init(currentScene, onUpdate, onLoaded) {		
	scene = currentScene;
		
	//GUI
	$ = {};
	const G = new GUI();
		
	$.n = 119; G.add( $, 'n', 0, 1000 ).step(1).onChange(onUpdate);	
	$.scaleY = 1; G.add( $, 'scaleY', 0, 5 ).onChange(onUpdate);		
	$.radScale = 1; G.add( $, 'radScale', 0, 5 ).onChange(onUpdate);		
	$.pointSize = 1; G.add( $, 'pointSize', 0, 5 ).onChange(onUpdate);		
	

	matPrime = new THREE.MeshPhongMaterial({color:0xff0000});	
	matLine = new THREE.LineBasicMaterial( { color: 0x0000ff } );	
	matRadLine = new THREE.LineBasicMaterial( { color: 0xff00ff } );	
	matNorm = new THREE.MeshNormalMaterial();	
	matSel = new THREE.MeshPhongMaterial({color:0xff0000});
	matAxis = new THREE.LineBasicMaterial( { color: 0x00ffff } );	
	
	geoOrigin = new THREE.CylinderGeometry(0.1, 0.1, 0.1, 10, 1, false);		
	geoPlane = new THREE.PlaneGeometry( 1, 0.25 );
	
	
	onLoaded();	
}

function addLight(...pos) {
    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(...pos);
	scene.add(light);
}
  

function ngonPath(n, x, y, size) {
	const points = [];
	
	
	points.push( new THREE.Vector3( x + size * Math.cos(0), 0, y + size * Math.sin(0)) );
	

	for (var i = 1; i <= n;i += 1) {		
		var px = x + size * Math.cos(i * 2 * Math.PI / n);
		var py = y + size * Math.sin(i * 2 * Math.PI / n)
		points.push( new THREE.Vector3( px, 0, py) );		
	}

	
	var geo = new THREE.BufferGeometry().setFromPoints( points );
	var path = new THREE.Line( geo, matLine );
	return path;
}

function ngonPoint(i, n, x, y, size, height) {
	 		
	var px = x + size * Math.cos(i * 2 * Math.PI / n);
	var py = y + size * Math.sin(i * 2 * Math.PI / n)
	var geoPoint = new THREE.CylinderGeometry($.pointSize, $.pointSize, height, 10, 1, false);		
	
	var mat = (i == 0 || Math.floor(n/2) === i)? matSel : matNorm;
	var objPoint = new THREE.Mesh(geoPoint, mat);
	objPoint.position.x = px;
	objPoint.position.z = py;
		
	objPoint.position.y = (height/2);
	
	
	//Radial line
	var line = [];
	line.push( new THREE.Vector3( 0, 0, 0) );		
	line.push( new THREE.Vector3( px, 0, py) );		
		
	var geo = new THREE.BufferGeometry().setFromPoints( line );
	var lineObj = new THREE.Line( geo, matRadLine );
	scene.add(lineObj);
	
	return objPoint;
}


export function render() {
	scene.background = new THREE.Color('white');

	addLight(-1, 2, 4);
	addLight( 1, -1, -2);
	
	//Origin	
	var objOrigin = new THREE.Mesh(geoOrigin, matNorm);	
	scene.add(objOrigin);	
	
	//Axis
	var axis = new THREE.Mesh( geoPlane, matAxis );
	axis.scale.x = 100;

	axis.rotation.x = Math.PI / -2;
	scene.add(axis);
	
		
	
	//Draw concentric even-gon factoid model
	var objs = new THREE.Group();	
	var lenN = Math.sqrt($.n);
	for (var c = 2; c <= lenN; c++) {
		var circum = 2*c;
		var rad = c*$.radScale;
		
		//Draw path
		var path = ngonPath(circum, 0, 0, rad);
		scene.add(path);
		
		//Draw delta point		
		var delta = ($.n-(c*c))%circum;
		var height = ($.n-(c*c))/circum;
		var objPoint = ngonPoint(delta, circum, 0, 0, rad, height*$.scaleY);				
		scene.add(objPoint);
		
	}

	scene.add(objs );
	
}