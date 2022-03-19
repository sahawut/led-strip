input.onButtonPressed(Button.A, function () {
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Orange))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Orange))
    strip.show()
})
input.onButtonPressed(Button.B, function () {
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Indigo))
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Purple))
    strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Orange))
    strip.setPixelColor(3, neopixel.colors(NeoPixelColors.White))
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
    strip.show()
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P1, 15, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.White))
basic.showLeds(`
    . # . # .
    # # # # #
    # # # # #
    . # # # .
    . . # . .
    `)
