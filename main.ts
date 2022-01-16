input.onButtonPressed(Button.A, function () {
    Kika()
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P0, 170)
    basic.showIcon(IconNames.Tortoise)
})
function Kika () {
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P0, 110)
    basic.pause(1500)
    pins.servoWritePin(AnalogPin.P0, 80)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P0, 170)
}
let TTP = 0
let snabbhet = 0
tinkercademy.crashSensorSetup(DigitalPin.P5)
basic.forever(function () {
    if (tinkercademy.crashSensor()) {
        snabbhet = randint(1, 9)
        if (snabbhet < 8) {
            TTP = snabbhet * 0
        } else if (snabbhet == 8) {
            Kika()
        } else {
            TTP = 4000
        }
        basic.showNumber(snabbhet)
        basic.pause(TTP)
        pins.servoWritePin(AnalogPin.P0, 80)
        basic.showIcon(IconNames.Happy)
        pins.servoWritePin(AnalogPin.P0, 170)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
    }
})
