console.log("JS START")

var isMenu = false;

function jsMenu() {
    if (isMenu === false) {
        document.querySelector("#menu-mobile").style.display = 'block';
        document.querySelector("#close-menu").style.display = 'block';
        document.querySelector("#menu").style.display = 'none';
        isMenu = true;
        console.log(isMenu)
    } else {
        document.querySelector("#menu-mobile").style.display = 'none';
        document.querySelector("#close-menu").style.display = 'none';
        document.querySelector("#menu").style.display = 'block';
        isMenu = false;
        console.log(isMenu)

    }
}

function hideMenu() {
    document.querySelector("#menu-mobile").style.display = 'none';
    document.querySelector("#close-menu").style.display = 'none';
    document.querySelector("#menu").style.display = 'block';
    isMenu = false;
    console.log(isMenu)
}