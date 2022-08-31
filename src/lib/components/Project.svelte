<script lang='ts'>
  import { onMount } from 'svelte'
  export let name: string = 'Project Name'
  export let technologies: string[] = []
  export let description: string = 'Project description.'

  let imageURL: string | null = null
  onMount(async () => {
    // Take name of project, lowercase, and replace spaces with "-"
    let processedName = name.toLowerCase().replace(' ', '-')
    // Append dark or light to the name
    const darkScheme = window.matchMedia('(prefers-color-scheme: dark)')
    processedName += darkScheme.matches ? '-dark' : '-light'
    // Construct image URL based on the theme
    onColorChange()
    function onColorChange() {
      if (darkScheme.matches) {
        processedName = processedName.replace('-light', '-dark')
      } else {
        processedName = processedName.replace('-dark', '-light')
      }
      imageURL = new URL(`../assets/project-images/${processedName}.png`, import.meta.url).href
    }

    darkScheme.addEventListener('change', onColorChange)
    
    return () => darkScheme.removeEventListener('change', onColorChange);
  })

  export let link: string | null = null
  export let live: string | null = null
  export let prompt: string[] = []
  export let reversed: boolean = false
  export let colour = 'hsl(0, 50%, 50%)'
</script>

<div class='project-container'>
  {#if reversed}
    <a href={live} target='_blank'>
      <img src={imageURL} alt='' />
    </a>
  {/if}
  <div class='info-container'>
    <a href={link} target='_blank'>{name}</a>
    <div class='technologies-container'>
      {#each technologies as technology}
        <span class='technology' style='--colour: {colour}'>{technology}</span>
      {/each}
    </div>
    <span>{description}</span>
  </div>
  {#if !reversed}
    <a href={live} target='_blank'>
      <img src={imageURL} alt='' />
    </a>
  {/if}
</div>

<style lang='scss'>
  .project-container {
    display: flex;
    width: 100%;
    gap: 3em;
  }

  .info-container {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: .5em;

    a {
      width: max-content;
      font-size: 2em;
      font-weight: bold;
      text-decoration: none;
      color: currentColor;
    }

    .technologies-container {
      display: flex;
      gap: 1em;

      span {
        color: white;
        font-size: .9em;
        background-color: var(--colour);
        padding: .1em .75em;
        border-radius: 1em;
      }
    }
  }

  img {
    max-width: 50em;
    display: block;
  }
</style>
