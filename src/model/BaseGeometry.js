//Module Imports
import * as THREE from 'https://unpkg.com/three@0.164.1/build/three.module.js';

export function Plane(scene) {
    const planeGeo = new THREE.PlaneGeometry( 20, 20, 32, 32 )
    const planeColor = new THREE.Color('rgb(255,255,255)')
    const planeMat = new THREE.MeshStandardMaterial( {color: planeColor} )
    const plane = new THREE.Mesh ( planeGeo, planeMat )
    plane.receiveShadow = true
    plane.material.roughness = 0
    scene.add( plane )
}

export default { Plane }