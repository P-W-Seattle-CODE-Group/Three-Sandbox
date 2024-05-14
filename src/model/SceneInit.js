import * as THREE from 'https://unpkg.com/three@0.164.1/build/three.module.js';
import { OrbitControls } from 'https://unpkg.com/three@0.164.1/examples/jsm/controls/OrbitControls.js';

function SceneInit() {
    const scene = new THREE.Scene();

    const sceneContainer = document.getElementById('scene-container');
    const sceneWidth = sceneContainer.clientWidth;
    const sceneHeight = sceneContainer.clientHeight;


    const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
    });
    renderer.setSize (sceneWidth, sceneHeight);
    renderer.setPixelRatio (window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.gammaFactor = 0;

    sceneContainer.append(renderer.domElement)

    const camera = new THREE.PerspectiveCamera(
        60,                         //FOV
        sceneWidth / sceneHeight,   //Aspect Ratio
        0.1,                        //Near Clipping
        1000                        //Far Clipping
    );
    camera.up = new THREE.Vector3 (0, 0, 1);

    const controls = new OrbitControls(
        camera,
        renderer.domElement
    );
    controls.target = new THREE.Vector3(0,0,0);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05; 

    return {
        scene: scene,
        sceneContainer : sceneContainer,
        renderer: renderer,
        camera: camera,
        controls: controls
    }

}

export default SceneInit