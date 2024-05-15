//Module Imports
import * as THREE from 'https://unpkg.com/three@0.164.1/build/three.module.js';

export function getObjectCenters(targObjects, camera) {
    console.log(camera.position)
    const centers = []
    const projCenters = []
    targObjects.forEach((object) => {
        object.children.forEach((child) => {
            child.updateMatrix()
            child.updateMatrixWorld()
            child.geometry.computeBoundingSphere();
            centers.push(child.geometry.boundingSphere.center)
        })
    })
    centers.forEach((item) => {
        const projItem = item.clone()
        projItem.project( camera )
        projCenters.push( projItem )
    })

    const sceneContainer = document.getElementById('scene-container')
    const tagContainer = document.getElementById('tag-container')
    const tagDivs = tagContainer.querySelectorAll('div')

    for (let i=0; i<tagDivs.length; i++) {
        const x = (projCenters[i].x + 1) * sceneContainer.clientWidth / 2
        console.log(x)
        const y = (-projCenters[i].y + 1) * sceneContainer.clientHeight / 2
        console.log(y)

        tagDivs[i].style.left = (parseInt(x) - (tagDivs[i].clientWidth / 2)) + 'px'
        tagDivs[i].style.top = (parseInt(y) - (tagDivs[i].clientHeight / 2)) + 'px'

        //TODO: Find distance between camera and points, adjust scale/opacity of div based on distance
    }


    //return{centers, projCenters}
};

export default {getObjectCenters}