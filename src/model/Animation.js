//Module Imports
import { TWEEN } from 'https://unpkg.com/three@0.139.0/examples/jsm/libs/tween.module.min.js';

export function popUpAnimation(target, duration, targetPostion) {
    let ogPosition = target.object.position.clone()
    let currentPosition = {
        x: target.object.position.x,
        y: target.object.position.y,
        z: target.object.position.z
    }

    new TWEEN.Tween(currentPos)
        .to (targPos, duration)
        .easing (TWEEN.Easing.Elastic.InOut)
        .onUpdate(function() {
            target.object.position.set(currentPos.x, currentPos.y, currentPos.z)
        })
        .start()
        .onComplete(function() {
            new TWEEN.Tween(currentPos)
            .to(ogPos, duration)
            .easing (TWEEN.Easing.Elastic.InOut)
            .onUpdate(function() {
                target.object.position.set(currentPos.x, currentPos.y, currentPos.z)
            })
            .start()
        })
};

export default popUpAnimation