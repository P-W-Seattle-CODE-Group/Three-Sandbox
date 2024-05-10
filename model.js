//Module Imports
import * as THREE from 'https://unpkg.com/three@0.164.1/build/three.module.js';
import { Rhino3dmLoader } from 'https://unpkg.com/three@0.164.1/examples/jsm/loaders/3DMLoader.js';
import { OrbitControls } from 'https://unpkg.com/three@0.164.1/examples/jsm/controls/OrbitControls.js';
import { Tween } from 'https://unpkg.com/three@0.164.1/examples/jsm/libs/tween.module.js'

//Function Imports
import SceneInit from './src/SceneInit';
import fetch3dmModel from './src/Load3dm';
import windowResize from './src/utils/HandleWindowResize';

//Initialize Scene
const { scene, renderer, camera, controls } = SceneInit();


//Load 3dm Model
const testModel = fetch3dmModel('', true, false);

//Window Resize
windowResize();