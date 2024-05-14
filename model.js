//Module Imports
import * as THREE from 'https://unpkg.com/three@0.164.1/build/three.module.js';
import { Rhino3dmLoader } from 'https://unpkg.com/three@0.164.1/examples/jsm/loaders/3DMLoader.js';
import { OrbitControls } from 'https://unpkg.com/three@0.164.1/examples/jsm/controls/OrbitControls.js';
import { Tween } from 'https://unpkg.com/three@0.164.1/examples/jsm/libs/tween.module.js'

//Function Imports
import SceneInit from './src/model/SceneInit';
import fetch3dmModel from './src/model/Load3dm';
import windowResize from './src/utils/HandleWindowResize';
import {ThrePointSpotLight, ambientLight, hemisphereLight} from './src/model/Lighting';
import {onPointerHover} from './src/model/Interaction';
import { Plane } from './src/model/BaseGeometry';
import {getObjectCenters} from './src/model/GetObjectCenters';

//Initialize Scene
const { scene, sceneContainer, renderer, camera, controls } = SceneInit();
camera.position.set(25, -25, 25)

//Lighting Setup
ambientLight('rgb(255,255,255)', 1, scene);
ThrePointSpotLight('rgb(244,244,239)', 50, 10, -10, 50, scene);
//hemisphereLight('rgb(255,255,255)', 'rgb(155,155,155)', 1, scene);

//Load 3dm Model
const testModel = await fetch3dmModel('/Test-Model.3dm', true, false, scene);
console.log(testModel)
const testModelCenters = getObjectCenters(testModel)
console.log(testModelCenters)

//Generic Three Objects
Plane(scene);

//Interaction
window.addEventListener('mousemove', function(event) {
    onPointerHover(event, testModel, camera)
});

//Window Resize
windowResize(camera, renderer, sceneContainer);

function render () {
    camera.updateMatrixWorld();
    renderer.render( scene, camera );
}
function animate() {
    requestAnimationFrame(animate)
    controls.update();
    render();
}
animate();

//console.log(scene)