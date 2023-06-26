<script>
  import watchingyou from '$lib/assets/watchingyou.png'
	import { onMount } from 'svelte';

  export let colour = 'hsl(0, 50%, 50%)'

  // Set root variable to computed colour
  onMount(() => {
    const root = document.querySelector(':root')
    root.style.setProperty('--colour', colour)
  })

  export let changeHue = () => {}
</script>

<div class='circle' style='--colour: {colour}' on:click={changeHue}>
  <img src={watchingyou} alt='' on:click|stopPropagation>
</div>

<style lang='scss'>
  .circle {
    position: relative;
    display: flex;
    justify-content: center;
    --size: 25em;
    width: var(--size);
    height: var(--size);

    background-color: var(--colour);
    border-radius: 50%;
    margin: 0;
    margin-block-end: 11em;

    @media (max-width: 500px) {
      --size: 15em;
      margin-block-end: 6em;
    }
  }

  img {
    position: absolute;
    top: 0;
    width: calc(var(--size) / 1.75);
    transform: translate(2.5%, 10%);
    user-select: none;
    pointer-events: none;
  }
</style>
