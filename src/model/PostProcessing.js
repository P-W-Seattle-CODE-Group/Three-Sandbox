//Module Imports
import * as THREE from 'https://unpkg.com/three@0.164.1/build/three.module.js';
import {EffectComposer} from 'https://unpkg.com/three@0.164.1/examples/jsm/postprocessing/EffectComposer.js';
import {RenderPass} from 'https://unpkg.com/three@0.164.1/examples/jsm/postprocessing/RenderPass.js';
import {OutputPass} from 'https://unpkg.com/three@0.164.1/examples/jsm/postprocessing/OutputPass.js';
import {SSAOPass} from 'https://unpkg.com/three@0.164.1/examples/jsm/postprocessing/SSAOPass.js';

let composer

export function PostProcess(renderer, scene, camera, sceneContainer) {
    composer = new EffectComposer(renderer)
    
    const renderPass = new RenderPass(scene, camera)
    composer.addPass(renderPass)

    const ssaoPass = new SSAOPass(scene, camera, sceneContainer.clientWidth, sceneContainer.clientHeight) 
    //composer.addPass(ssaoPass)

    const outputPass = new OutputPass()
    //composer.addPass(outputPass)

    return {composer}
}

export default {PostProcess}