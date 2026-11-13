input.buttonsAB.onEvent(ButtonEvent.Click, function () {
    shipflying = !(shipflying)
    Station = !(Station)
    StatSpeed = Math.randomRange(3, 6)
})
input.buttonA.onEvent(ButtonEvent.Click, function () {
    sspeed += 1
    if (sspeed > 7) {
        sspeed = 7
    }
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    sspeed += -1
    if (sspeed < 0) {
        sspeed = 0
    }
})
let Station = false
let StatSpeed = 0
let shipflying = false
let sspeed = 0
let speeds = [Colors.Red, Colors.Orange, Colors.Yellow, Colors.Yellow, Colors.Green, Colors.Blue, Colors.Indigo, Colors.Violet]
sspeed = 0
shipflying = true
let sloc = 0
let Statloc = 0
StatSpeed = Math.randomRange(3, 6)
Station = true
forever(function () {
    if (shipflying) {
        light.setPixelColor(sloc, speeds[sspeed])
        for (let i = 0; i < sspeed; i++) {
            pause(100)
        }
        pause(100)
        light.setPixelColor(sloc, 0x000000)
        sloc = (sloc + 1) % 10
    }
})
forever(function () {
    if (Station) {
        light.setPixelColor(Statloc, speeds[StatSpeed])
        for (let i = 0; i < StatSpeed; i++) {
            pause(100)
        }
        pause(100)
        light.setPixelColor(Statloc, 0x000000)
        Statloc = (Statloc + 1) % 10
    }
})
forever(function () {
    if (shipflying && Station) {
        if (Statloc == sloc && sspeed == StatSpeed) {
            Station = false
            shipflying = false
            light.showAnimation(light.rainbowAnimation, 500)
            music.magicWand.play()
            light.setAll(0x000000)
            sspeed = 0
            StatSpeed = Math.randomRange(3, 6)
            Statloc = 0
            sloc = 0
        }
    }
})
