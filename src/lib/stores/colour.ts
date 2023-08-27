import { writable, derived } from 'svelte/store'

function getRandomHue() {
  return Math.floor(Math.random() * 360)
}

export const hue = writable<number | null>(null)
export const hsl = derived(hue, ($hue: number | null) => $hue ? `hsl(${$hue}, 50%, 50%)` : null)

export function updateHue() {
  hue.set(getRandomHue())
}