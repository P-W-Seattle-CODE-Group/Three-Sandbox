import * as THREE from 'https://unpkg.com/three@0.164.1/build/three.module.js';

export function ambientLight (color, intensity, scene) {
    const lightColor = new THREE.Color ( color )
    const light = new THREE.AmbientLight(lightColor, intensity);
    scene.add(light);
}

export function spotLight (color, location, scene) {
    const lightColor = new THREE.Color ( color )
    const light = new THREE.SpotLight(lightColor)
    light.position.set(location)
    scene.add(light)
}

export default {ambientLight, spotLight}