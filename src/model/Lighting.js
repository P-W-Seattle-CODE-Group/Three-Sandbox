import * as THREE from 'https://unpkg.com/three@0.164.1/build/three.module.js';

export function ambientLight (color, intensity, scene) {
    const lightColor = new THREE.Color ( color )
    const light = new THREE.AmbientLight(lightColor, intensity);
    scene.add(light);
}

export function SpotLight(color, intensity, x, y, z, scene) {
    const spotColor = new THREE.Color ( color )
    const spotLight = new THREE.SpotLight(keyColor)
    const spotHelper = new THREE.SpotLightHelper( keyLight, '#000000' )
    spotLight.position.set( x, y, z )
    spotLight.intensity = intensity
    spotLight.castShadow = true
    spotLight.angle = Math.PI / 4
    spotLight.penumbra = 0.5
    spotLight.decay = 1
    spotLight.shadow.mapSize.width = 1024 * 1
    spotLight.shadow.mapSize.height = 1024 * 1
    spotLight.shadow.camera.near = 0.5
    spotLight.shadow.camera.far = 10000
    spotLight.shadow.focus = 1
    spotHelper.update()
    scene.add(spotLight)
    //scene.add(keyHelper)
}

export function ThrePointSpotLight (color, intensity, x, y, z, scene) {
    const keyColor = new THREE.Color ( color )
    const keyLight = new THREE.SpotLight(keyColor)
    const keyHelper = new THREE.SpotLightHelper( keyLight, '#000000' )
    keyLight.position.set( x, y, z )
    keyLight.intensity = intensity
    keyLight.castShadow = true
    keyLight.angle = Math.PI / 4
    keyLight.penumbra = 0.5
    keyLight.decay = 1
    keyLight.shadow.mapSize.width = 1024 * 1
    keyLight.shadow.mapSize.height = 1024 * 1
    keyLight.shadow.camera.near = 0.5
    keyLight.shadow.camera.far = 10000
    keyLight.shadow.focus = 1
    keyHelper.update()
    scene.add(keyLight)
    //scene.add(keyHelper)

    const backColor = new THREE.Color( color )
    const backLight = new THREE.SpotLight(backColor)
    const backHelper = new THREE.SpotLightHelper( backLight, '#000000' )
    backLight.position.set( -(2 * x), -(2 * y), z)
    backLight.intensity = intensity / 2
    backLight.angle = Math.PI / 4
    backLight.penumbra = 0.5
    backLight.decay = 1
    scene.add(backLight)
    backHelper.update()
    //scene.add(backHelper)

    const fillColor = new THREE.Color( color )
    const fillLight = new THREE.SpotLight(fillColor)
    const fillHelper = new THREE.SpotLightHelper( fillLight, '#000000' )
    fillLight.position.set( -x, y, z)
    fillLight.intensity = intensity / 4
    fillLight.angle = Math.PI / 4
    fillLight.penumbra = 0.5
    fillLight.decay = 1
    scene.add(fillLight)
    fillHelper.update()
    //scene.add(fillHelper)
}

export function hemisphereLight (skyColor, groundColor, intensity, scene) {
    const sColor = new THREE.Color( skyColor )
    const gColor = new THREE.Color( groundColor )
    const light = new THREE.HemisphereLight (sColor, gColor, intensity)
    scene.add(light)
}

export default {ambientLight, SpotLight, ThrePointSpotLight, hemisphereLight}