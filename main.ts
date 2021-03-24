input.onPinPressed(TouchPin.P2, function () {
    Spielstart = false
    basic.turnRgbLedOff()
})
input.onPinPressed(TouchPin.P1, function () {
    Spielstart = true
    Berührungen = 0
    basic.clearScreen()
})
let Spielstart = false
let Berührungen = 0
Berührungen = 0
Spielstart = true
basic.forever(function () {
    if (Spielstart) {
        if (input.pinIsPressed(TouchPin.P0)) {
            Berührungen += 1
            basic.setLedColor(0xff0000)
            basic.showIcon(IconNames.No)
            music.playTone(262, music.beat(BeatFraction.Half))
            basic.clearScreen()
        } else {
            basic.setLedColor(0x00ff00)
        }
    } else {
        basic.showNumber(Berührungen)
    }
})
