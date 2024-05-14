//Module Imports
import * as THREE from 'https://unpkg.com/three@0.164.1/build/three.module.js';

export function getObjectCenters(targObjects) {
    const centers = []
    targObjects.forEach((object) => {
        object.children.forEach((child) => {
            child.updateMatrix()
            child.updateMatrixWorld()
            child.geometry.computeBoundingSphere();
            centers.push(child.geometry.boundingSphere.center)
        })
    })
    return(centers)
};

export default {getObjectCenters}