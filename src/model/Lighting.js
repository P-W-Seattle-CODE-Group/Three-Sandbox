import * as THREE from 'https://unpkg.com/three@0.164.1/build/three.module.js';

export function ambientLight (color, intensity, scene) {
    const lightColor = new THREE.Color ( color )
    const light = new THREE.AmbientLight(lightColor, intensity);
    scene.add(light);
}

export function spotLight (color, intensity, location, scene) {
    const lightColor = new THREE.Color ( color )
    const light = new THREE.SpotLight(lightColor, intensity)
    light.position.set(location)
    scene.add(light)
}

export function hemisphereLight (skyColor, groundColor, intensity, scene) {
    const sColor = new THREE.Color( skyColor )
    const gColor = new THREE.Color( groundColor )
    const light = new THREE.HemisphereLight (sColor, gColor, intensity)
    scene.add(light)
}

export default {ambientLight, spotLight, hemisphereLight}