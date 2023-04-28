input.onGesture(Gesture.Shake, function () {
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    if (Math.randomBoolean()) {
        basic.showLeds(`
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    }
})
