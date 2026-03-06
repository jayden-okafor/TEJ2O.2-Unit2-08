# Copyright (c) 2026 MTHS All rights reserved
#
# Created by: Jayden Okafor
# Created on: Mar 2026
# This program turns on every single light the RGB LED can produce

from microbit import *

# clear screen
display.clear()

# show happyface
display.show(Image.HAPPY)

while True:
    # when button "a" is pressed
    if button_a.is_pressed():

        # turn all colours off
        pin13.write_digital(0)
        pin14.write_digital(0)
        pin15.write_digital(0)

        # clear screen
        display.clear()

        # show checkmark
        display.show(Image.YES)

        # prints "red" on the display
        display.scroll("Red")

        # turn on red light for 1 second
        pin13.write_digital(1)
        pin14.write_digital(0)
        pin15.write_digital(0)
        sleep(1000)

        # turn all colours off
        pin13.write_digital(0)
        pin14.write_digital(0)
        pin15.write_digital(0)

        # prints "Green" on the display
        display.scroll("Green")

        # turn off red and turn on green for 1 second
        pin13.write_digital(0)
        pin14.write_digital(1)
        pin15.write_digital(0)
        sleep(1000)

        # turn all colours off
        pin13.write_digital(0)
        pin14.write_digital(0)
        pin15.write_digital(0)

        # prints "Blue" on the display
        display.scroll("Blue")

        # turn off green and turn on blue for 1 second
        pin13.write_digital(0)
        pin14.write_digital(0)
        pin15.write_digital(1)
        sleep(1000)

        # turn all colours off
        pin13.write_digital(0)
        pin14.write_digital(0)
        pin15.write_digital(0)

        # prints "Magnenta" on the display
        display.scroll("Magnenta")

        # turn on red while leaving blue on, which creates magnenta. for 1 second
        pin13.write_digital(1)
        pin14.write_digital(0)
        pin15.write_digital(1)
        sleep(1000)

        # turn all colours off
        pin13.write_digital(0)
        pin14.write_digital(0)
        pin15.write_digital(0)

        # prints "Cyan" on the display
        display.scroll("Cyan")

        # turn all colours off
        pin13.write_digital(0)
        pin14.write_digital(0)
        pin15.write_digital(0)

        # turn off red and turn on green while still leaving blue on. which creates cyan. for 1 second
        pin13.write_digital(0)
        pin14.write_digital(1)
        pin15.write_digital(1)
        sleep(1000)

        # turn all colours off
        pin13.write_digital(0)
        pin14.write_digital(0)
        pin15.write_digital(0)

        # prints "Yellow" on the display
        display.scroll("Yellow")

        # turn on red and turn off blue while leaving green on to create yellow. for 1 second.
        pin13.write_digital(1)
        pin14.write_digital(1)
        pin15.write_digital(0)
        sleep(1000)

        # turn all colours off
        pin13.write_digital(0)
        pin14.write_digital(0)
        pin15.write_digital(0)

        # prints "White" on the display
        display.scroll("White")

        # turn on blue while leaving red and green still on. which makes white. for 1 second
        pin13.write_digital(1)
        pin14.write_digital(1)
        pin15.write_digital(1)
        sleep(1000)

        # turn off all colours.
        pin13.write_digital(0)
        pin14.write_digital(0)
        pin15.write_digital(0)

        # clear the screen
        display.clear()

        # show happy face
        display.show(Image.HAPPY)
