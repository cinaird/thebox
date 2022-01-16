input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P0, 102)
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P0, 91)
    basic.showIcon(IconNames.Tortoise)
})
tinkercademy.crashSensorSetup(DigitalPin.P5)
basic.forever(function () {
    if (tinkercademy.crashSensor()) {
        pins.servoWritePin(AnalogPin.P0, 139)
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.No)
    }
})
