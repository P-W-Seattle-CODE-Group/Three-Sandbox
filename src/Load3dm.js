//Module Imports
import * as THREE from 'https://unpkg.com/three@0.164.1/build/three.module.js';
import { Rhino3dmLoader } from 'https://unpkg.com/three@0.164.1/examples/jsm/loaders/3DMLoader.js';

const loader = new Rhino3dmLoader();
loader.setLibraryPath('https://cdn.jsdelivr.net/npm/rhino3dm@8.6.1/')

async function fetch3dmModel(modelURL, castShadow, receiveShadow, scene) {
    return new Promise((resolve, reject) => {
        const objects = [];
        loader.load(modelURL, function(object) {
            objects.push(object)
            objects.forEach((object) => {
                object.children.forEach((child) => {
                    if (castShadow === true) {
                        child.castShadow = true
                    } else {
                        child.castShadow = false
                    }
                    if (receiveShadow === true) {
                        child.receiveShadow = true
                    } else {
                        child.receiveShadow = false
                    }
                })
                scene.add(object)
            });
            resolve(objects);
        });

    }, function (error) {
        reject(error)
        console.log(error)
    });
};

export default fetch3dmModel