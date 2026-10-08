from adafruit_circuitplayground import cp
import time
import random
#Define colors
pink = (12,10,12)
gold = (50, 40, 5)
blue = (0,0,8)
orange = (25, 10, 0)
blank = (0,0,0)
grn = (0,20,0)
green  = (0,20,0)
red = (20,0,0)
white = (20,20,20)
indigo = (255,0,149)
violet = (115,0,255)


speeds = [red,orange,gold,green,blue,indigo,violet]
sspeed = 0
sticks = sspeed
sloc = 0

station = False
stloc = random.randrange(10)
stspeed = random.randrange(3,5,1)
stticks = stspeed



while True:


    val = 0

    if cp.button_a and cp.button_b:
        val = 3
        time.sleep(.1)
    elif cp.button_a:
            val = 1
            time.sleep(.1)
    elif cp.button_b:
        val = 2
        time.sleep(.1)
    if val == 1:
        sspeed = (sspeed+1)
        if sspeed > 6:
            sspeed = 6
    if val == 2:
        sspeed = (sspeed-1)
        if sspeed<0:
            sspeed = 0
    if val == 3:
        station = not(station)

    cp.pixels[sloc] = speeds[sspeed]
    time.sleep(.1)
    sticks = sticks - 1
    if sticks <= 0 :
        cp.pixels[sloc] = blank
        sticks = sspeed
        sloc = (sloc+1)%10
    if station:
        cp.pixels[stloc]=speeds[stspeed]
        stticks = stticks - 1
        if stticks <= 0:
            stticks = stspeed
            cp.pixels[stloc] = blank
            stloc = (stloc+1)%10