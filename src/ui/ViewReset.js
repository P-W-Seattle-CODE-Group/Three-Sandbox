export function ViewResetButton() {

    const uiContainer = document.getElementById('ui-container')
    
    const buttonContainer = document.createElement('div')
    buttonContainer.style.width = (uiContainer.clientWidth * 0.3) + 'px'
    buttonContainer.style.maxWidth = '500px'
    buttonContainer.style.minWidth = '100px'

    buttonContainer.style.height = (uiContainer.clientHeight * 0.1) + 'px'
    buttonContainer.style.margin = '10px'

    buttonContainer.style.borderRadius = '10px'
    buttonContainer.style.backgroundColor = 'rgba(155, 155, 155,1)'
    
    uiContainer.append(buttonContainer)
}

export default { ViewResetButton }