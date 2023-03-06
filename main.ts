radio.setGroup(174)
basic.forever(function () {
    if (KSB045.getBtnValue(KSB045.btnName.E)) {
        radio.sendNumber(1)
    }
    if (KSB045.getBtnValue(KSB045.btnName.C)) {
        radio.sendNumber(2)
    }
})
