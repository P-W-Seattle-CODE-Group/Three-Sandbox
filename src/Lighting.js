import * as THREE from 'https://unpkg.com/three@0.164.1/build/three.module.js';

function ambientLight (color, intensity, scene) {
    const ambientColor = new THREE.Color ( color )
    const ambientLight = new THREE.AmbientLight(ambientColor, intensity);
    scene.add(ambientLight);
}

export default ambientLight