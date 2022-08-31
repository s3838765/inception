<script lang='ts'>
  export let title: string | null = null
  export let description: string | null = null
  export let colour: string | null = null
  export let closeFn: () => {}
</script>

<div class='container' on:click|self={closeFn}>
  <div class='panel'>
    <h1>{title}</h1>
    <p>{description}</p>
    <button
      style='--colour: {colour}'
      on:click={closeFn}>Browse in darkness</button>
  </div>
</div>

<style lang='scss'>
  .container {
    position: fixed;
    z-index: 1000;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: hsla(0, 0%, 5%, 0.5);
  }

  .panel {
    position: absolute;
    background-color: var(--surface);
    border-radius: .5em;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 3em;

    h1 {
      margin: 0;
    }

    button {
      background-color: var(--colour);
      border: none;
      padding: .75em;
      border-radius: .25em;
      width: 100%;
      font-family: inherit;

      &:hover {
        cursor: pointer;
      }
    }

  }
</style>