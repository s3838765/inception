import { getRandomHue } from '$lib/utils/getRandomHue'
import { browser } from '$app/environment'

// Used to determine the number of blobs that should be rendered
const NUM_BLOBS = 100

export function load() {
  if (browser) {
    return {
      hue: getRandomHue(),
      randomPositions: Array.from({ length: NUM_BLOBS }, () => ({
        x: Math.floor(Math.random() * 100),
        y: Math.floor(Math.random() * 100),
      })),
      isVisible: true,
    }
  } else {
    return {
      randomPositions: Array(NUM_BLOBS).fill(0),
      isVisible: false,
    }
  }

}