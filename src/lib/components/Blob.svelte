<script lang='ts'>
  let thisElement: HTMLDivElement
  
  // Set the initial position of the blob (randomly selected)
  interface Position {
    x: number,
    y: number
  }
  export let initialPosition: Position
  let position: Position = initialPosition

  // Used to fade in the blob
  export let isVisible: boolean

  // Compute a random blob size within bounds
  const MAX_HEIGHT_EM = 20
  const MAX_WIDTH_EM = 20
  const MIN_HEIGHT_EM = 5
  const MIN_WIDTH_EM = 5
  let computedWidthEm: number = Math.floor(Math.random() * MAX_WIDTH_EM) + MIN_WIDTH_EM
  let computedHeightEm: number = Math.floor(Math.random() * MAX_HEIGHT_EM) + MIN_HEIGHT_EM

  // Hue is a degree (0-360 inclusive), and this variable is used to determine how different
  // this blob's hue is from the current global colour
  const HUE_DEVIATION = 30
  export let colour: string
  let hue: number = 0
  let newHue: number = 0
  let newColour: string = ''
  // Update the hue of the blob when the colour changes
  $: {
    const hueMatches = colour.match(/hsl\((\d+),/)
    hue = hueMatches ? parseInt(hueMatches[1]) : 0
    newHue = Math.floor(Math.random() * HUE_DEVIATION * 2) + (hue - HUE_DEVIATION)
    newColour = `hsl(${newHue}, 50%, 50%)`
  }

  /**
   * Returns a promise that resolves after a random interval between min_ms and max_ms
   * 
   * @param min_ms The minimum number of milliseconds to wait
   * @param max_ms The maximum number of milliseconds to wait
   */
  function delay(min_ms=1000, max_ms=3000) {
    const interval = Math.floor(Math.random() * (max_ms - min_ms + 1) + min_ms)
    return new Promise((resolve) => {
      setTimeout(resolve, interval)
    })
  }

  /**
   * Event that is fired when any transition on a blob element is complete. The function only handles
   * events related to movement (namely, the top property), and opacity changes. The opacity property is
   * used to detect when the blobs have loaded into the site, and the top is used to detect when the
   * blob has moved from point a to b.
   * 
   * When the check is passed, a random delay is set, and then the blob is moved to a new position
   * with a random size set
   * 
   * @param event The event fired upon completion of a transition
   */
  async function handleTransitionEnd(event: TransitionEvent) {
    // We only care about this event if it is related to reaching the end of the transform transition (and not colour or size changes)
    // An equivalent event will fire for the 'left' property, but we only want to handle the event once
    if (event.propertyName === 'top' || event.propertyName === 'opacity') {
      await delay()

      setRandomPosition()
      setRandomSize()
    }
  }

  /**
   * Clamps a value between a minimum and maximum value
   * 
   * @param value The value to clamp
   * @param min The minimum value
   * @param max The maximum value
   */
  function clamp(value: number, min: number, max: number) {
    return Math.min(Math.max(value, min), max);
  }

  /**
   * Selects a random position for the blob, within a threshold of the initial position
   *
   * @param distanceThresholdPercent The percentage of the initial position that the blob can move
   */
  function setRandomPosition(distanceThresholdPercent=30) {
    distanceThresholdPercent /= 100
    const offsetX = (Math.random() * 2 - 1) * distanceThresholdPercent * position.x;
    const offsetY = (Math.random() * 2 - 1) * distanceThresholdPercent * position.y;

    const newX = clamp(position.x + offsetX, 0, 100)
    const newY = clamp(position.y + offsetY, 0, 100)
    position = {
      x: newX,
      y: newY
    }
  }

  /**
   * Sets a random size for the blob
   */
  function setRandomSize() {
    computedWidthEm = Math.floor(Math.random() * MAX_WIDTH_EM) + MIN_WIDTH_EM
    computedHeightEm = Math.floor(Math.random() * MAX_HEIGHT_EM) + MIN_HEIGHT_EM
  }

</script>

<div
  bind:this={thisElement}
  on:transitionend={handleTransitionEnd}
  class='square'
  style={`
    --computedWidthEm: ${computedWidthEm}em;
    --computedHeightEm: ${computedHeightEm}em;
    --topPct: ${position.y}%;
    --leftPct: ${position.x}%;
    --backgroundColour: ${newColour};
    --opacity: ${isVisible ? 0.08 : 0};
  `}
/>

<style lang='scss'>
  .square {
    transition: all 7s ease-in-out, background-color 1s ease-in-out, opacity 3s ease-in-out;
    position: absolute;
    transform: translateX(-50%);

    opacity: var(--opacity);
    width: var(--computedWidthEm);
    height: var(--computedHeightEm);
    top: var(--topPct);
    left: var(--leftPct);
    background-color: var(--backgroundColour);
  }
</style>