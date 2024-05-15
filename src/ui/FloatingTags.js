//Module Imports
import * as THREE from 'https://unpkg.com/three@0.164.1/build/three.module.js';

export function FloatingTags(objects) {
    const uiCont = document.getElementById('ui-container')
    const tagCont = document.createElement('div')
    tagCont.id = 'tag-container'
    uiCont.append(tagCont)
    objects.forEach((object) => {
        object.children.forEach((child) => {
            
            const tagDiv = document.createElement('div')
            tagCont.append(tagDiv)
            
            const divStyle = {
                backgroundColor: 'rgba(243, 243, 239, 0.95)',
                width: '100px',
                height: '50px',
                position: 'absolute',
                borderRadius: '20px'
            }
            for (const [key, value] of Object.entries(divStyle)) {
                tagDiv.style[key] = value
            }
        })
    })

}


export default { FloatingTags }