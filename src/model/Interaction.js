//Module Imports
import * as THREE from 'https://unpkg.com/three@0.154.0/build/three.module.js';

const pointer = new THREE.Vector2();
const raycaster = new THREE.Raycaster();

export function onPointerHover(event, target, camera) {
    let firstIntersected = null
    let x = (
        ((-window.innerWidth / 2) + event.clientX) / (window.innerWidth / 2)
    );
    let y = (
        ((window.innerHeight / 2) - event.clientY) / (window.innerHeight / 2)
    );

    pointer.x = x;
    pointer.y = y;
    raycaster.setFromCamera (pointer, camera)

    let intersected = raycaster.intersectObjects( target, true );
    if (intersected.length > 0) {
        firstIntersected = intersected[0]
    } else {    
        firstIntersected = null
    };
}

export function onPointerClick (event, target, camera) {

}

export default {onPointerHover}