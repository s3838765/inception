<script lang='ts'>
  export let name: string = 'Project Name'
  export let technologies: string[] = []
  export let description: string = 'Project description.'
  export let theme: string | null = null

  let imageURL: string | null = null
  let processedName = name.toLowerCase().replace(' ', '-')
  $: { 
    // Initially append theme
    if (!(processedName.endsWith('-dark') || processedName.endsWith('-light')) && theme) {
      processedName += `-${theme}`
    }

    // Theme switch logic - relating to the image URL
    const otherTheme = theme === 'dark' ? 'light' : 'dark'
    processedName = processedName.replace(`-${otherTheme}`, `-${theme}`)
    imageURL = new URL(`../assets/project-images/${processedName}.png`, import.meta.url).href
  }

  export let link: string | null = null
  export let live: string | null = null
  export let prompt: string[] = []
  export let reversed: boolean = false
  export let colour = 'hsl(0, 50%, 50%)'
</script>

<div class='project-container {reversed && 'reversed'}'>
  <div class='info-container'>
    <a href={link} target='_blank'>{name}</a>
    <div class='technologies-container'>
      {#each technologies as technology}
        <span class='technology' style='--colour: {colour}'>{technology}</span>
      {/each}
    </div>
    <span>{description}</span>
  </div>
  <a href={live} target='_blank'>
    <img src={imageURL} alt='' />
  </a>
</div>

<style lang='scss'>
  .project-container {
    display: flex;
    width: 100%;
    gap: 3em;
  }

  .reversed {
    flex-direction: row-reverse;
  }

  @media (max-width: 1000px) {
    .project-container {
      gap: 1em;
      flex-direction: column;
    }
  }

  .info-container {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: .5em;
    min-width: 35%;

    /* TODO: underline animation on hover */
    a {
      color: var(--text);
      width: max-content;
      font-size: 2em;
      font-weight: bold;
      text-decoration: none;
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
    width: 100%;
    display: block;
  }
</style>
 