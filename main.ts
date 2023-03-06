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
    } else if (KSB045.getJoystickValue(KSB045.valueType.X) > 540 && (KSB045.getJoystickValue(KSB045.valueType.Y) < 700 && KSB045.getJoystickValue(KSB045.valueType.Y) > 300)) {
        radio.sendNumber(7)
    } else if (KSB045.getJoystickValue(KSB045.valueType.X) < 500 && (KSB045.getJoystickValue(KSB045.valueType.Y) < 700 && KSB045.getJoystickValue(KSB045.valueType.Y) > 300)) {
        radio.sendNumber(8)
    } else if (KSB045.getJoystickValue(KSB045.valueType.Y) > 540 && (KSB045.getJoystickValue(KSB045.valueType.X) < 700 && KSB045.getJoystickValue(KSB045.valueType.X) > 300)) {
        radio.sendNumber(9)
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . #
            . # . # .
            . . # . .
            `)
        basic.pause(50)
        basic.clearScreen()
    } else if (KSB045.getJoystickValue(KSB045.valueType.Y) < 500 && (KSB045.getJoystickValue(KSB045.valueType.X) < 700 && KSB045.getJoystickValue(KSB045.valueType.X) > 300)) {
        radio.sendNumber(10)
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . . . . .
            . . . . .
            `)
        basic.pause(50)
        basic.clearScreen()
    } else {
    	
    }
})
