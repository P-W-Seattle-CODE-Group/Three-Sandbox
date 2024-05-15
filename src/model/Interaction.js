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
        firstIntersected = intersected[0].object
    } else {    
        firstIntersected = null
    };
    return (firstIntersected)
}

export function onPointerClick (event, target, camera) {

}

export function hoverColor(item, objects, mats, color) {
    let itemName
    if (item !== null) {
        itemName = item.name
        for (let i=0; i < objects.length; i++) {
            if (objects[i].name === itemName) {
                objects[i].material.color.set(color)
                /*
                objects[i].material.emissive = new THREE.Color(color)
                objects[i].material.emissiveIntensity = 1.25
                */
            } else {
                objects[i].material.color.set(mats[i].color)
            }
        }
    } else {
        itemName = null
        for (let i=0; i < objects.length; i++) {
            objects[i].material.color.set(mats[i].color)
            /*
            objects[i].material.emissive = mats[i].emissive
            objects[i].material.emissiveIntensity = 1
            */
        }
    }
}

export default {onPointerHover}