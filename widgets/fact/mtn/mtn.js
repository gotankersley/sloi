import * as THREE from '/lib/gfx3/three.module.js';
import { GUI } from '/lib/gfx3/dat.gui.module.js';


var scene;
var $;


export function init(currentScene, onUpdate, onLoaded) {		
	scene = currentScene;
		
	//GUI
	$ = {};
	const G = new GUI();
	
	$.n = 30; G.add( $, 'n', 0, 100 ).step(1).onChange(onUpdate);	
	$.marginR = 1.1; G.add( $, 'marginR', 0, 5 ).onChange(onUpdate);
	$.marginC = 1.1; G.add( $, 'marginC', 0, 5 ).onChange(onUpdate);	
	$.scaleY = 0.05; G.add( $, 'scaleY', 0, 5 ).onChange(onUpdate);		
	$.factorix = 60; G.add( $, 'factorix', 1, 1000 ).step(1).onChange(onUpdate);
	$.trans = 0.5;G.add( $, 'trans', 0, 1 ).onChange(onUpdate);	

	onLoaded();	
}



export function render() {
	scene.background = new THREE.Color('white');
	var matNorm = new THREE.MeshNormalMaterial();
	var matTrans = new THREE.MeshPhongMaterial({color:0xFF0000, opacity: $.trans, transparent: true });
	var matSel = new THREE.MeshPhongMaterial({color:0xffffff});
	const geoCube = new THREE.BoxGeometry( 1, 1, 1);
	const geoPlane = new THREE.PlaneGeometry( 1, 1 );

	
	//Origin
	var geoOrigin = new THREE.CylinderGeometry(0.1, 0.1, 0.1, 10, 1, false);		
	var objOrigin = new THREE.Mesh(geoOrigin, matNorm);
	
	scene.add(objOrigin);	
	
	//Factorix plane
	var pln = new THREE.Mesh( geoPlane, matTrans );
	pln.position.y = $.factorix*$.scaleY;
	pln.scale.x = 1000;
	pln.scale.y = 1000;
	

	pln.rotation.x = Math.PI / -2;
	scene.add(pln);
	
	var objParts = new THREE.Group();	
	

	for (var x = 1; x < $.n; x++) {
		for (var y = 1; y < $.n; y++) {
			
            var height = x*y;
			
			var objPart;			
						
			if (height == $.factorix) {
				
				var tmpMat = new THREE.MeshBasicMaterial();					
				tmpMat.color = new THREE.Color(0xff0000);
			
				objPart = new THREE.Mesh( geoCube, tmpMat);
			}
			else objPart = new THREE.Mesh( geoCube, matNorm);
						
			var scaledHeight = height*$.scaleY;
			objPart.scale.y = scaledHeight;

			objPart.position.x = x*$.marginR;
			objPart.position.y = (scaledHeight/2);
			objPart.position.z = y*$.marginC;

			
			objParts.add(objPart);
		}
	}
	

	scene.add(objParts );
	
}