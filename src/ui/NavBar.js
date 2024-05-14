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
            mainDiv.style.width = '100px'
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
    container.append(button)
    button.style.backgroundColor = backColor
    button.style.boxShadow = '0px 0px 10px rgba(44, 44, 44, 0.5)'

    
    function updateButton() {
        const horStyle = {
            width: '100px',
            height: '100px',
            margin: '10px',
            borderRadius: '10px',
            position: 'relative',
            top: '-20%',
            left: '0%'
        }
    
        const verStyle = {
            width: '100px',
            height: '100px',
            margin: '10px',
            borderRadius: '10px',
            position: 'relative',
            top: '0%',
            left: '20%'
        }
        if (window.innerWidth <= 1000) {
            container.style.flexDirection = 'row'
            for (const [key, value] of Object.entries(horStyle)) {
                button.style[key] = value
            }
        } else {
            container.style.flexDirection = 'column'
            for (const [key, value] of Object.entries(verStyle)) {
                button.style[key] = value
            }
        }
    }
    updateButton();

    window.addEventListener('resize', updateButton)
    return (button)
}


export default { DynamicNavBar }