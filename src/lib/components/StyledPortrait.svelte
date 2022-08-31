<script>
  import watchingyou from '$lib/assets/watchingyou.png'

  export let colour = 'hsl(0, 50%, 50%)'
</script>

<div class='circle' style='--colour: {colour}'>
  <img src={watchingyou} alt=''>
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
    margin-block-end: 10em;
  }

  img {
    position: absolute;
    top: 0;
    width: calc(var(--size) / 1.75);
    transform: translate(2.5%, 10%);
  }
</style>
