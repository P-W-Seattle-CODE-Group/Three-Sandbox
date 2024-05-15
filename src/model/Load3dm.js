//Module Imports
import * as THREE from 'https://unpkg.com/three@0.164.1/build/three.module.js';
import { Rhino3dmLoader } from 'https://unpkg.com/three@0.164.1/examples/jsm/loaders/3DMLoader.js';

const loader = new Rhino3dmLoader();
loader.setLibraryPath('https://cdn.jsdelivr.net/npm/rhino3dm@8.6.1/')

export async function fetch3dmModel(modelURL, castShadow, receiveShadow, scene) {
    return new Promise((resolve, reject) => {
        const objects = [];
        loader.load(modelURL, function(object) {
            objects.push(object)
            objects.forEach((object) => {
                object.children.forEach((child) => {
                    child.material.roughness = 1 - child.material.reflectivity
                    child.material.sheenRoughness = 1 - child.material.reflectivity
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

export async function fetch3DMCombined(url, castShadow, receiveShadow) {
    return new Promise((resolve, reject) => {
        let object
        let children = []
        let initMats = []
        loader.load(url, function(object) {
            object = object
            object.children.forEach((child) => {
                child.material.roughness = 1 - child.material.reflectivity
                child.material.sheenRoughness = 1 - child.material.reflectivity
                child.material.clearcoatRoughness = child.material.reflectivity
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
                let childMat = child.material.clone()
                initMats.push(childMat)
                children.push(child)
            })
            resolve ({object, children, initMats})
        })
    }, function (error) {
        console.log('Check filepath for typos')
        reject(error)
    })
};

export default {fetch3dmModel, fetch3DMCombined}