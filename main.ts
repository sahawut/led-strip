input.onButtonPressed(Button.A, function () {
    n = 0
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Purple))
    basic.showNumber(score)
})
input.onButtonPressed(Button.B, function () {
    if (n == 14) {
        score += 1
    }
    basic.showNumber(score)
})
let n = 0
let score = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P1, 15, NeoPixelMode.RGB)
score = 0
strip.showRainbow(1, 360)
basic.showString("A")
basic.forever(function () {
    basic.pause(200)
    strip.shift(1)
    n += 1
    strip.show()
})
