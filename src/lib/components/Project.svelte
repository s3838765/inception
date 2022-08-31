<script lang='ts'>
  export let name: string = 'Project Name'
  export let technologies: string[] = []
  export let description: string = 'Project description.'
  export let theme: string | null = null
  export let link: string | null = null
  export let reversed: boolean = false
  export let colour = 'hsl(0, 50%, 50%)'

  // Handle image URL processing - switching between light and dark images
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
    if (['-dark', '-light'].some((val) => processedName.includes(val))) {
      imageURL = new URL(`../assets/project-images/${processedName}.png`, import.meta.url).href
    }
  }

  // Handle dynamic prompts
  export let live: string | null = null
  export let prompts: string[] = []
  // Add generic prompt if there is a link
  if (live) prompts.push(`Click here to view a live version of ${name}!`)
  // Randomly select prompt to use on hover of images
  const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)]
</script>

<div class='project-container {reversed && 'reversed'}' style='--colour: {colour}'>
  <div class='info-container'>
    <a href={link} target='_blank' title='View source code'>{name}</a>

    <div class='technologies-container'>
      {#each technologies as technology}
        <span class='technology'>{technology}</span>
      {/each}
    </div>

    <span>{description}</span>
  </div>

  <a href={live} target='_blank' title={randomPrompt && 'View live version'} class={randomPrompt && 'live-link'}>
    <img src={imageURL} alt='' />

    {#if randomPrompt}
      <span>{randomPrompt}</span>
    {/if}
  </a>
</div>

<style lang='scss'>
  .project-container {
    *:focus-visible {
      outline: 3px solid var(--colour);
      border-radius: .1em;
    }
    display: flex;
    width: 100%;
    gap: 3em;
  
    /* a tags with live links */
    .live-link {
      text-decoration: none;
      position: relative;
      overflow: hidden;

      /* Prompt w/ live link */
      span {
        color: white;
        position: absolute;
        box-sizing: border-box;
        width: 80%;
        text-align: center;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
      }

      &:hover, &:focus {
        img {
          transition: all .2s ease;
          filter: brightness(0.4) blur(1px);
        }
        span {
          transition: all .2s ease;
          opacity: 1;
        }
      }
    }

    /* Project images */
    img {
      max-width: 50em;
      width: 100%;
      display: block;
      border-radius: .3em;
    }
  }

  /* Determine whether images are on left or right of info */
  .reversed {
    flex-direction: row-reverse;
  }

  /* All text relating to a project */
  .info-container {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: .5em;
    min-width: 35%;

    a {
      position: relative;
      color: var(--text);
      width: max-content;
      font-size: 2em;
      font-weight: bold;
      text-decoration: none;

      &:hover:before {
        width: 100%;
      }

      &:before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 5%;
        width: 0;
        height: 2px;
        background-color: var(--colour);
        transition: width .25s ease;
      }
    }

    /* Technology pills */
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

  /* Put images under information section */
  @media (max-width: 1000px) {
    .project-container {
      gap: 1em;
      flex-direction: column;
    }
  }
</style>
