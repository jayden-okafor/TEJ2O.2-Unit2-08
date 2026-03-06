/* Copyright (c) 2026 MTHS All rights reserved
 *
 * Created by: Jayden Okafor
 * Created on: Mar 2026
 * This program turns on every single light the RGB LED can produce
*/

// clear screen
basic.clearScreen()

// show happyface
basic.showIcon(IconNames.Happy)

// when button "a" is pressed
input.onButtonPressed(Button.A, function () {

// turn all colours off
pins.digitalWritePin(DigitalPin.P13, 0)
pins.digitalWritePin(DigitalPin.P14, 0)
pins.digitalWritePin(DigitalPin.P15, 0)

// clear screen
basic.clearScreen()

// show checkmark
basic.showIcon(IconNames.Yes)

// turn on red light for 1 second
basic.showString("Red")

pins.digitalWritePin(DigitalPin.P13, 1)
pins.digitalWritePin(DigitalPin.P14, 0)
pins.digitalWritePin(DigitalPin.P15, 0)
basic.pause(1000)

// turn off red and turn on green for 1 second
pins.digitalWritePin(DigitalPin.P13, 0)
pins.digitalWritePin(DigitalPin.P14, 1)
pins.digitalWritePin(DigitalPin.P15, 0)
basic.pause(1000)

// turn off green and turn on blue for 1 second
pins.digitalWritePin(DigitalPin.P13, 0)
pins.digitalWritePin(DigitalPin.P14, 0)
pins.digitalWritePin(DigitalPin.P15, 1)
basic.pause(1000)

// turn on red while leaving blue on, which creates magnenta. for 1 second
pins.digitalWritePin(DigitalPin.P13, 1)
pins.digitalWritePin(DigitalPin.P15, 1)
basic.pause(1000)

// turn off red and turn on green while still leaving blue on. which creates cyan. for 1 second
pins.digitalWritePin(DigitalPin.P13, 0)
pins.digitalWritePin(DigitalPin.P14, 1)
pins.digitalWritePin(DigitalPin.P15, 1)
basic.pause(1000)

// turn on red and turn off blue while leaving green on to create yellow. for 1 second.
pins.digitalWritePin(DigitalPin.P13, 1)
pins.digitalWritePin(DigitalPin.P14, 1)
pins.digitalWritePin(DigitalPin.P15, 0)
basic.pause(1000)

// turn on blue while leaving red and green still on. which makes white. for 1 second
pins.digitalWritePin(DigitalPin.P13, 1)
pins.digitalWritePin(DigitalPin.P14, 1)
pins.digitalWritePin(DigitalPin.P15, 1)
basic.pause(1000)

// turn off all colours.
pins.digitalWritePin(DigitalPin.P13, 0)
pins.digitalWritePin(DigitalPin.P14, 0)
pins.digitalWritePin(DigitalPin.P15, 0)

// clear the screen
basic.clearScreen()

// show happy face
basic.showIcon(IconNames.Happy)
})
