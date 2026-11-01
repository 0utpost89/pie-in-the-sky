# Sky Scratcher

An endless vertical jumper starring **Rolo**, a grumpy, very fluffy tabby Persian. He bounces up from a city back yard, through the clouds, past the edge of space and into black holes that lead to other universes. On the way he eats fish, chases laser dots and dodges dogs, stray tomcats and food-pinching seagulls.

Everything is in one `index.html`: the art is drawn with canvas shapes, the sounds and the swinging honky-tonk piano music are made with the Web Audio API, and there are no external assets or libraries.

## Play

**https://0utpost89.github.io/pie-in-the-sky/**

### Install it as an app

- **Android (Chrome, Samsung Internet, Edge):** tap **INSTALL APP** at the bottom of the title screen, or use the browser menu's **Install app** / **Add to Home screen**.
- **iPhone / iPad (Safari):** tap **Share**, then **Add to Home Screen**.
- **Computer (Chrome / Edge):** click the install icon at the right of the address bar.

Once installed it opens full-screen with Rolo's icon, and works offline. When you're online it always loads the latest version.

You can also just download `index.html` and open it in a browser (installing and offline play need it served over the web, as on GitHub Pages).

## Controls

- **Arrow keys** or **A / D:** move left and right
- **Touch:** put your thumb anywhere and drag; Rolo steers towards it
- **Tilt:** switch on **TILT** on the title screen (iPhones will ask for permission). If the browser never sends tilt readings, the game says so and you can drag instead
- **Space / Enter / tap:** start, or try again
- **M** or the speaker button: mute everything
- **N** or the music-note button: music on/off

Rolo bounces by himself. Your high score and the furthest universe you reached are saved in your browser.

## Pickups

- **Fish:** three bigger bounces
- **Bag of catnip:** catnip zoomies, a rush straight upward
- **Laser pointer** (rarer): a red dot zips up the screen and Rolo chases it, weaving side to side and ignoring hazards, for about two seconds

Fish and catnip fill his belly (the meter at the top left: green when he's light, turning yellow, orange and finally red when he's stuffed): more points per snack, up to ×3.5, but more gravity, so the jumps get lower. The belly goes down over time, one level every 10 seconds with a burp. An empty belly isn't bad: it just means Rolo is at his lightest and jumps highest. The laser pointer is a toy, so it doesn't fill the belly.

## Platforms

Every zone has the same four kinds, so you can read them at speed:

- **Standard:** flat and solid
- **Bouncy:** a dome (grass tuft, ball of wool, tennis ball...) that squashes and launches you higher
- **Moving:** has little cyan arrows at each end
- **Breakable:** dashed outline, crumbles after one landing

## Enemies

- **Dogs:** terriers and bulldogs trotting along platforms. Bump into one and you get knocked down ("SQUIRREL?!").
- **Stray tomcats:** scruffy, one-eyed and very territorial. Same deal.
- **Dogs in hot-air balloons** in the sky, and **jetpack space dogs** in space.
- **Seagulls** swoop in to nick your food (and a belly level). Bounce on their heads to bop them.
- **UFOs** switch on a tractor beam if you hang around them.

## Zones and universes

1. The Back Yard (0 to 1,000m)
2. The Sky (1,000 to 2,500m)
3. The Edge of Space (2,500 to 4,500m): helmet on, lower gravity
4. Deep Space (4,500 to 7,000m)
5. The Black Hole Belt (7,000m onward)

Drift into the middle of a black hole to go through to **Universe 2 (Yarn World)**, where he wears a bobble hat and the platforms are scarves, balls of wool and knitting needles. The next black hole leads to **Universe 3 (Dog World)**, where he goes undercover in a pair of floppy dog ears among kennels, tennis balls and frisbees. Then it's round again.

## Files

- `index.html`: the whole game
- `manifest.webmanifest`, `sw.js`: what makes it installable and playable offline
- `icons/`: the app icons, drawn from the game's own Rolo artwork. To redraw them after changing Rolo, run `node tools/make-icons.js` (needs Playwright with Chromium)

## Tweaking

Zone heights, gravity, jump speed, belly, pickups, laser, hazard and black-hole settings are in the `CONFIG` object at the top of the script. How hard each zone gets is in `PROFILES` just below it. Pickup odds are in `PICKUPS`.
