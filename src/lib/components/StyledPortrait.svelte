<script>
  import watchingyou from '$lib/assets/watchingyou.png'
  import { updateHue } from '$lib/stores/colour';

</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class='circle' on:click={updateHue}>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
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

    &:hover {
      cursor: pointer;
    }

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
