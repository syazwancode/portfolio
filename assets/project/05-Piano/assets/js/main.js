var soundList = {
    snd1: new Howl({
        src: ['./assets/audio/1.mp3'],
    }),
    snd2: new Howl({
        src: ['./assets/audio/2.mp3']
    }),
    snd3: new Howl({
        src: ['./assets/audio/3.mp3']
    }),
    snd4: new Howl({
        src: ['./assets/audio/4.mp3']
    }),
    snd5: new Howl({
        src: ['./assets/audio/5.mp3']
    }),
    snd6: new Howl({
        src: ['./assets/audio/6.mp3']
    }),
    snd7: new Howl({
        src: ['./assets/audio/7.mp3']
    }),
    snd8: new Howl({
        src: ['./assets/audio/8.mp3']
    }),
    snd9: new Howl({
        src: ['./assets/audio/9.mp3']
    })
}

var box_1 = document.querySelector(".box1")
var box_2 = document.querySelector(".box2")
var box_3 = document.querySelector(".box3")
var box_4 = document.querySelector(".box4")
var box_5 = document.querySelector(".box5")
var box_6 = document.querySelector(".box6")
var box_7 = document.querySelector(".box7")
var box_8 = document.querySelector(".box8")
var box_9 = document.querySelector(".box9")

document.addEventListener('keydown', function (e) {
    switch (e.keyCode) {
        case 65:
            soundList.snd1.play()
            box_1.style.transform = "scale(0.95)"
            break
        case 83:
            soundList.snd2.play()
            box_2.style.transform = "scale(0.95)"
            break
        case 68:
            soundList.snd3.play()
            box_3.style.transform = "scale(0.95)"
            break
        case 70:
            soundList.snd4.play()
            box_4.style.transform = "scale(0.95)"
            break
        case 71:
            soundList.snd5.play()
            box_5.style.transform = "scale(0.95)"
            break
        case 72:
            soundList.snd6.play()
            box_6.style.transform = "scale(0.95)"
            break
        case 74:
            soundList.snd7.play()
            box_7.style.transform = "scale(0.95)"
            break
        case 75:
            soundList.snd8.play()
            box_8.style.transform = "scale(0.95)"
            break
        case 76:
            soundList.snd9.play()
            box_9.style.transform = "scale(0.95)"
            break
    }
})

document.addEventListener('keyup', function (e) {
    switch (e.keyCode) {
        case 65:
            box_1.style.transform = "scale(1)"
            break
        case 83:
            box_2.style.transform = "scale(1)"
            break
        case 68:
            box_3.style.transform = "scale(1)"
            break
        case 70:
            box_4.style.transform = "scale(1)"
            break
        case 71:
            box_5.style.transform = "scale(1)"
            break
        case 72:
            box_6.style.transform = "scale(1)"
            break
        case 74:
            box_7.style.transform = "scale(1)"
            break
        case 75:
            box_8.style.transform = "scale(1)"
            break
        case 76:
            box_9.style.transform = "scale(1)"
            break
    }
})

function playPiano(i) {
    switch (i) {
        case 1:
            soundList.snd1.play()
            break
        case 2:
            soundList.snd2.play()
            break
        case 3:
            soundList.snd3.play()
            break
        case 4:
            soundList.snd4.play()
            break
        case 5:
            soundList.snd5.play()
            break
        case 6:
            soundList.snd6.play()
            break
        case 7:
            soundList.snd7.play()
            break
        case 8:
            soundList.snd8.play()
            break
        case 9:
            soundList.snd9.play()
            break
    }
}