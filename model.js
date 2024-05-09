import * as THREE from 'https://unpkg.com/three@0.164.1/build/three.module.js';
import { Rhino3dmLoader } from 'https://unpkg.com/three@0.164.1/examples/jsm/loaders/3DMLoader.js';
import { OrbitControls } from 'https://unpkg.com/three@0.164.1/examples/jsm/controls/OrbitControls.js';
import { Tween } from 'https://unpkg.com/three@0.164.1/examples/jsm/libs/tween.module.js'
import SceneInit from './src/SceneInit';

const { scene, renderer, camera, controls } = SceneInit();

/*
console.log(scene)
console.log(renderer)
console.log(camera)
console.log(controls)
*/