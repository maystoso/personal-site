// ─────────────────────────────────────────────────────────────
//  MIRROR SCENE SETTINGS
//  Everything you'd want to tweak lives here. mirror3d.astro
//  reads from this file, so updates to the scene code never
//  overwrite your numbers.
// ─────────────────────────────────────────────────────────────

// Flood the scene with light + show a marker cube, to check the model loaded.
export const debug = false;

// Where each shard sits and where it goes.
// pos is NORMALIZED: -1 to 1 across the glass, 0,0 dead centre.
// `size` scales that one shard. 1 is normal, 2 is twice as big.
export const shards = [
  { label: 'Resume',  href: '/resume',  pos: [-0.52,  0.54], size: 1.9 },
  { label: 'Art',     href: '/art',     pos: [ 0.56,  0.16], size: 1.0 },
  { label: 'About',   href: '/about',   pos: [-0.44, -0.34], size: 1.0 },
  { label: 'Contact', href: '/contact', pos: [ 0.46, -0.62], size: 1.0 },
];

export const model = {
  // Relative to /public
  path: '/models/antique_mirror.glb',

  // Degrees. 90 on Y turns the mirror from edge-on to facing you.
  rotX: 0,
  rotY: 0,
  rotZ: 0,

  // How much of the view the mirror fills. Bigger = larger.
  fit: 4.9,

  // true = the whole model renders flat black, a cut-out against the glow.
  silhouette: false,

  // Only used when silhouette is false: which mesh counts as the glass.
  glassName: 'glass',
};

// What fraction of the mirror's bounding box is actually glass.
// Lower these if shards creep onto the ornate frame.
export const glass = {
  x: 0.52,
  y: 0.60,
};

// Flat light falling on everything, regardless of the torch. Even a
// little of this keeps the shards faintly visible in the dark, so set
// it to 0 if you want them to depend entirely on their own glow.
export const ambient = 0.1;

// The cursor flashlight.
export const torch = {
  power: 0.0001,
  color: 0xd6ccf5,
  distance: 9,
  decay: 1.6,
  // How far the light travels as the cursor crosses the screen.
  reachX: 3.4,
  reachY: 2.4,
};

// The light behind the mirror.
export const glow = {
  color: '#b9a6f0',
  size: 1.35,      // multiple of the mirror's height
  strength: 0.85,  // 0-1 opacity
  z: -1.2,         // how far behind the mirror
};

// Shard look and shape.
export const shardStyle = {
  // Pale icy glass. Faces are translucent; the edges do most of the work.
  color: 0xdce9f2,
  edgeColor: 0xffffff,
  // Opacity rides the torch, same as the debris: baseOpacity in the dark,
  // rising to maxOpacity under the beam. 0 base = fully invisible until
  // found, even with the backlight behind them.
  baseOpacity: 0.0,
  maxOpacity: 0.55,
  hoverOpacity: 0.8,
  edgeOpacity: 0,   // 0 = no edge lines at all

  roughness: 0.02,
  metalness: 1,
  emissive: 0x9fc7e0,

  // Size range of each sliver.
  sizeMin: 0.10,
  sizeMax: 0.30,

  // How elongated the wedges get. Higher = longer, sharper splinters.
  stretchMin: 1.4,
  stretchMax: 3.0,

  // 0 = smooth convex chips, 1 = violently notched. Controls how far
  // individual points get yanked inward to cut spikes into the outline.
  jaggedness: 0.72,

  // Number of corners per shard. More points = more complex breaks.
  pointsMin: 5,
  pointsMax: 9,

  // ---- MORPHING ----
  // The outline shifts continuously, like glass still settling.
  morph: true,
  morphSpeed: 0.0035,    // how fast corners ease toward their new spot
  morphRebuildMs: 50,   // how often the mesh is rebuilt. Lower = smoother,
                        // heavier. 50 is about 20 rebuilds a second.

  // How far each one rocks, and how fast.
  swayAmount: 0.22,
  swaySpeed: 0.6,

  // Glow when the torch is near, and when hovered.
  nearGlow: 0.9,
  hoverGlow: 1.5,
  // How wide the beam's influence is, measured across the screen.
  torchReach: 1.3,

  // ---- IRIDESCENCE ON HOVER ----
  // The shard shifts through an oil-slick hue while the cursor is on it.
  // Off hover it sits with its plain emissive colour.
  iridescent: true,
  hueSpeed: 0.55,        // how fast the hue drifts while hovered
  hueStart: 0.50,        // 0=red 0.33=green 0.5=cyan 0.66=blue 0.83=magenta
  hueSpan: 0.40,         // how far through the wheel it travels
  hueSaturation: 0.55,
  hueLightness: 0.68,

  // A little shimmer even with no torch on them, so they hint at being
  // clickable. 0 = fully dark until found.
  baseGlow: 0.0,
};

// Look of the HTML labels that float above each shard.
export const ui = {
  labelSize: '1.6rem',

  // Labels read as this until the shard has been hovered long enough.
  mask: '???',
  // ms of hover before the real title resolves.
  revealDelay: 1000,
  // ms the screen shudders when a shard is first touched.
  shakeDuration: 420,

  // ---- WARP ----
  // Clicking a shard dives the camera into it before the page changes.
  warpDuration: 950,
  // How close the camera gets. Smaller = deeper into the shard.
  warpCloseness: 0.22,
  // Vertical nudge in pixels. 0 = dead centre on the shard.
  // Negative lifts it above, positive drops it below.
  labelOffsetY: 0,
};

// Tiny non-clickable fragments scattered around the big ones,
// so the four navigation shards don't look placed.
export const debris = {
  // TROUBLESHOOTING: set true to show every fragment at full opacity,
  // ignoring the torch. Use it to confirm they exist and check their size,
  // then set back to false.
  alwaysVisible: false,

  count: 46,

  // Note: jaggedness shrinks radii by up to 72%, so the real fragments
  // come out noticeably smaller than these numbers suggest.
  sizeMin: 0.035,
  sizeMax: 0.11,

  // Opacity is driven by the torch: baseOpacity in the dark, rising to
  // maxOpacity at the centre of the beam. 0 base = truly invisible.
  baseOpacity: 0,
  maxOpacity: 0.9,

  // Glow with no torch on them. 0 = truly invisible in the dark.
  baseGlow: 0,
  // Glow at the centre of the beam.
  torchGlow: 1,
  // How close the torch must be before they start to catch.
  torchReach: 1.0,

  // How far they spread, as a multiple of the glass half-size.
  spread: 1.05,
};