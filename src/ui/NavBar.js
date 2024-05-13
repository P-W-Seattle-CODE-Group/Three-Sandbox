const uiContainer = document.getElementById('ui-container')

export function DynamicNavBar(backColor) {
    const mainDiv = document.createElement('div')
    mainDiv.id = 'nav-bar-container'
    uiContainer.append(mainDiv)

    mainDiv.style.backgroundColor = backColor
    mainDiv.style.boxShadow = '0px 0px 10px rgba(44, 44, 44, 0.25)'
    mainDiv.style.position = 'absolute'
    mainDiv.style.display = 'flex'
    mainDiv.style.alignItems = 'center'
    mainDiv.style.justifyContent = 'center'
    
    function updateNavBar() {
        if (window.innerWidth <= 1000) {
            mainDiv.style.top = '90%'
            mainDiv.style.left = '2.5%'
            mainDiv.style.width = '95%'
            mainDiv.style.height = '10%'
            mainDiv.style.borderRadius = '20px 20px 0px 0px'
        } else {
            mainDiv.style.top = '1%'
            mainDiv.style.left = '0%'
            mainDiv.style.width = '10%'
            mainDiv.style.height = '98%'
            mainDiv.style.borderRadius = '0px 20px 20px 0px'
        }
    }
    updateNavBar();

    window.addEventListener('resize', updateNavBar)
    return (mainDiv)

}

export function NavBarButton(backColor) {
    const container = document.getElementById('nav-bar-container')
    const button = document.createElement('div')
    button.style.backgroundColor = backColor
    button.style.boxShadow = '0px 0px 10px rgba(44, 44, 44, 0.5)'
    button.style.width = '10%'
    button.style.height = '90%'
    button.style.margin = '10px'
    button.style.borderRadius = '10px'
    button.style.position = 'relative'
    button.style.top = '-20%'

    container.append(button)
}


export default { DynamicNavBar }