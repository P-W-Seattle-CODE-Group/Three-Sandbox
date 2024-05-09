import * as THREE from 'https://unpkg.com/three@0.164.1/build/three.module.js';
import { Rhino3dmLoader } from 'https://unpkg.com/three@0.164.1/examples/jsm/loaders/3DMLoader.js';
import { OrbitControls } from 'https://unpkg.com/three@0.164.1/examples/jsm/controls/OrbitControls.js';
import { Tween } from 'https://unpkg.com/three@0.164.1/examples/jsm/libs/tween.module.js'

function SceneInit() {
    const scene = new THREE.Scene();

    const sceneContainer = document.getElementById('scene-container');
    const sceneWidth = sceneContainer.clientWidth;
    const sceneHeight = sceneContainer.clientHeight;

    const renderer = new THREE.WebGLRenderer(
        {
            antialias: true,
            alpha: true,
            size: {
                width: sceneWidth,
                height: sceneHeight
            }
        }
    );
    sceneContainer.append(renderer.domElement)

    const camera = new THREE.PerspectiveCamera(
        60,                         //FOV
        sceneWidth / sceneHeight,   //Aspect Ratio
        0.1,                        //Near Clipping
        1000                        //Far Clipping
    );

    const controls = new OrbitControls(
        camera,
        renderer.domElement
    );

    return {
        scene: scene,
        renderer: renderer,
        camera: camera,
        controls: controls
    }

}
SceneInit();

export default SceneInit