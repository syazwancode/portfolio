var menu = document.getElementById('menu-mobile-nav')
var suis = false

function showMenu() {

    if (suis === false) {
        menu.style.display = 'flex'
        suis = true
        console.log('fire! ', suis)
        return null
    }

    if (suis === true) {
        menu.style.display = 'none'
        suis = false
        console.log('water! ', suis)
        return null
    }

}

function closeMenu() {
    menu.style.display = 'none'
    suis = false
    console.log('water! ', suis)
    return null
}