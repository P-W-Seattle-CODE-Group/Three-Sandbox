//Module Imports
import * as THREE from 'https://unpkg.com/three@0.164.1/build/three.module.js';
import { Rhino3dmLoader } from 'https://unpkg.com/three@0.164.1/examples/jsm/loaders/3DMLoader.js';
import { OrbitControls } from 'https://unpkg.com/three@0.164.1/examples/jsm/controls/OrbitControls.js';
import { Tween } from 'https://unpkg.com/three@0.164.1/examples/jsm/libs/tween.module.js'

//Function Imports
import SceneInit from './src/SceneInit';
import fetch3dmModel from './src/Load3dm';
import windowResize from './src/utils/HandleWindowResize';
import ambientLight from './src/Lighting';

//Initialize Scene
const { scene, sceneContainer, renderer, camera, controls } = SceneInit();

//Load 3dm Model
const testModel = await fetch3dmModel('/eecs-simple.3dm', true, false, scene);

//Window Resize
windowResize(camera, renderer, sceneContainer);

//Lighting Setup
ambientLight('rgb(255,255,255)', 1.0, scene);

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