import * as THREE from 'https://unpkg.com/three@0.164.1/build/three.module.js';

export function ambientLight (color, intensity, scene) {
    const lightColor = new THREE.Color ( color )
    const light = new THREE.AmbientLight(lightColor, intensity);
    scene.add(light);
}

export function spotLight (color, intensity, x, y, z, scene) {
    const lightColor = new THREE.Color ( color )
    const light = new THREE.SpotLight(lightColor)
    const helper = new THREE.SpotLightHelper( light, '#000000' )
    light.position.set( x, y, z )
    light.intensity = intensity
    light.castShadow = true
    light.angle = Math.PI / 4
    light.penumbra = 0.5
    light.decay = 1
    light.shadow.mapSize.width = 1024
    light.shadow.mapSize.height = 1024
    light.shadow.camera.near = 0.5
    light.shadow.camera.far = 10000
    light.shadow.focus = 1
    helper.update()
    scene.add(light)
    //scene.add(helper)
}

export function hemisphereLight (skyColor, groundColor, intensity, scene) {
    const sColor = new THREE.Color( skyColor )
    const gColor = new THREE.Color( groundColor )
    const light = new THREE.HemisphereLight (sColor, gColor, intensity)
    scene.add(light)
}

export default {ambientLight, spotLight, hemisphereLight}