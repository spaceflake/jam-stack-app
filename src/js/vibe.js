const vibes = [
  "... and you are awesome!",
  "...stay positive!",
  "...strive for progress, not perfection!",
  "...you got this!",
]

let vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))]

document.querySelector(".vibe").append(vibe)
