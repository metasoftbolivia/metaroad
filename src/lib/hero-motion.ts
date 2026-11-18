export const heroMotion = {
  scrollDistance: 450,
  cardStagger: 0.12,
  ambientStart: 2.3,
  intro: {
    background: 0,
    navbar: 0.15,
    copy: 0.3,
    platform: 0.5,
    road: 0.65,
    bus: 0.75,
    rings: 1.15,
    connections: 1.35,
    cards: 1.5,
    particles: 2.1,
    scrollCue: 2.1,
  },
} as const

export const heroCardMotion = [
  {
    entry: { x: -25, y: 25, rotation: -8 },
    float: { y: -10, rotation: -0.8, duration: 4.2 },
  },
  {
    entry: { x: 0, y: -30, rotation: -5 },
    float: { y: -8, rotation: 0.9, duration: 4.7 },
  },
  {
    entry: { x: 0, y: -45, rotation: 0 },
    float: { y: -11, rotation: -0.6, duration: 5.1 },
  },
  {
    entry: { x: 0, y: -40, rotation: 5 },
    float: { y: -9, rotation: 0.8, duration: 5.6 },
  },
  {
    entry: { x: 25, y: 20, rotation: 7 },
    float: { y: -12, rotation: -0.9, duration: 6 },
  },
  {
    entry: { x: 35, y: 0, rotation: 9 },
    float: { y: -7, rotation: 1, duration: 6.4 },
  },
] as const
