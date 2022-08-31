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
    display: block;
  }
</style>
  <!-- {
    "name": "Elementary CA",
    "technologies": ["HTML", "CSS", "Javascript"],
    "description": "A simple implementation of Stephen Wolfram's elementary cellular automata.",
    "link": "https://github.com/tdib/elementary-ca",
    "live": "https://elementaryca.tdib.xyz",
    "prompt": [
      "Click here to view the elementary cellular automata playground!"
    ]
  },
  {
    "name": "Inception",
    "technologies": ["React"],
    "description": "The site you are currently looking at.",
    "link": "https://github.com/tdib/inception",
    "live": "https://tdib.xyz",
    "prompt": [
      "Click here if you want a new tab of the same site :^)",
      "You're already on the site but if you want another instance, just click here.",
      "Click here to view a live version of tdib.xyz! Wait... You're already here!"
    ]
  },
  {
    "name": "ListThis",
    "technologies": ["React", "Express"],
    "description": "A web application built with cloud services for personal or collaborative checklists.",
    "link": "https://github.com/tdib/listthis"
  },
  {
    "name": "VSFS",
    "technologies": ["Java"],
    "description": "Very Simple File System; a text based file system that allows you to store any type of file.",
    "link": "https://github.com/tdib/VSFS"
  },
  {
    "name": "Maze Pathfinder",
    "technologies": ["C++"],
    "description": "A pathfinder that navigates ASCII mazes.",
    "link": "https://github.com/tdib/maze-pathfinder"
  },
  {
    "name": "Qwirkle",
    "technologies": ["C++"],
    "description": "A CLI implementation of the board game Qwirkle.",
    "link": "https://github.com/tdib/qwirkle"
  } -->