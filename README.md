# Pie in the Sky

An endless vertical jumper. A hungry little ginger kitten bounces up from a city back yard, through the clouds, past the edge of space and into black holes that lead to other universes, eating every pie, sausage roll and pizza slice along the way.

Everything is in one `index.html`: the art is drawn with canvas shapes, the sounds and music are made with the Web Audio API, and there are no external assets or libraries.

## Play

- **Offline file:** download `index.html` and open it in any modern browser.
- On a phone, add it to your home screen for a full-screen, app-like game.

## Controls

- **Arrow keys** or **A / D:** move left and right
- **Touch:** hold the left or right side of the screen
- **Tilt:** switch on **TILT** on the title screen (iPhones will ask for permission)
- **Space / Enter / tap:** start, or try again
- **M** or the speaker button: mute everything
- **N** or the music-note button: music on/off

The kitten bounces by itself. Your high score and the furthest universe you reached are saved in your browser.

## Food

- **Pork pie:** three bigger bounces
- **Sausage roll:** a pastry shield for a few seconds
- **Pizza:** a rush straight upward

Every snack makes her belly bigger: more points per snack, but more gravity, so the jumps get lower. The belly goes down over time (one level every 10 seconds, with a burp).

## Platforms

Every zone has the same four kinds, so you can read them at speed:

- **Standard:** flat and solid
- **Bouncy:** a pink-trimmed dome that squashes and launches you higher
- **Moving:** has little cyan arrows at each end
- **Breakable:** cracked with a dashed outline, crumbles after one landing

## Hazards

- **Pensioners** shuffling along with walking sticks, on mobility scooters, in hot-air balloons and on jet-powered zimmer frames. Bump into one and you get knocked down ("In my day...").
- **Seagulls** swoop in to nick the food. Bounce on their heads to bop them.
- **UFOs** switch on a tractor beam if you hang around them.

## Zones and universes

1. The Back Yard (0 to 1,000m)
2. The Sky (1,000 to 2,500m)
3. The Edge of Space (2,500 to 4,500m): helmet on, lower gravity
4. Deep Space (4,500 to 7,000m)
5. The Black Hole Belt (7,000m onward)

Drift into the middle of a black hole to go through to **Universe 2 (Pork Pie World)**, then **Universe 3 (Pizza World)**, and round again.

## Tweaking

Zone heights, gravity, jump speed, belly, food, hazard and black-hole settings are in the `CONFIG` object at the top of the script. How hard each zone gets is in `PROFILES` just below it.
