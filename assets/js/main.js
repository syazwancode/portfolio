var menu = document.getElementById('menu-mobile-nav')
var suis = false
var color = 'dark'

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

function colorSwitch() {
    alert('You found a secret switch!')

    if (color === 'dark') {
        document.documentElement.style.setProperty("--light", "#1a1a1d");
        document.documentElement.style.setProperty("--dark", "white");
        document.documentElement.style.setProperty("--dark-light", "#e3e3e3");
        document.getElementById('banner-img').style.backgroundImage = "url('assets/img/img-banner-3-light.PNG')"
        color = 'light'
        window.scrollTo(0, 0)
        return false
    }

    if (color === 'light') {
        document.documentElement.style.setProperty("--light", "#edf2f4");
        document.documentElement.style.setProperty("--dark", "#2a2c41");
        document.documentElement.style.setProperty("--dark-light", "#323653");
        document.getElementById('banner-img').style.backgroundImage = "url('assets/img/img-banner-3.PNG')"
        color = 'dark'
        window.scrollTo(0, 0)
        return false
    }
}