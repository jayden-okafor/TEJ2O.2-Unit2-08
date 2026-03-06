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

    // prints "red" on the display
    basic.showString("Red")

    // turn on red light for 1 second
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    basic.pause(1000)

    // turn all colours off
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)

    // prints "Green" on the display
    basic.showString("Green")

    // turn off red and turn on green for 1 second
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 0)
    basic.pause(1000)

    // turn all colours off
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)

    // prints "Blue" on the display
    basic.showString("Blue")

    // turn off green and turn on blue for 1 second
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.pause(1000)

    // turn all colours off
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)

    // prints "Magnenta" on the display
    basic.showString("Magnenta")

    // turn on red while leaving blue on, which creates magnenta. for 1 second
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.pause(1000)

    // turn all colours off
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)

    // prints "Cyan" on the display
    basic.showString("Cyan")

    // turn all colours off
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)

    // turn off red and turn on green while still leaving blue on. which creates cyan. for 1 second
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.pause(1000)

    // turn all colours off
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)

    // prints "Yellow" on the display
    basic.showString("Yellow")

    // turn on red and turn off blue while leaving green on to create yellow. for 1 second.
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 0)
    basic.pause(1000)

    // turn all colours off
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)

    // prints "White" on the display
    basic.showString("White")

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
