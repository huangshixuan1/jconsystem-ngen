radio.setGroup(174)
basic.forever(function () {
    if (KSB045.getBtnValue(KSB045.btnName.E)) {
        radio.sendNumber(1)
    }
    if (KSB045.getBtnValue(KSB045.btnName.C)) {
        radio.sendNumber(2)
    }
    if (KSB045.getBtnValue(KSB045.btnName.F)) {
        radio.sendNumber(3)
    }
    if (KSB045.getBtnValue(KSB045.btnName.D)) {
        radio.sendNumber(4)
    }
    if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(5)
    }
    if (input.buttonIsPressed(Button.B)) {
        radio.sendNumber(6)
    }
})
