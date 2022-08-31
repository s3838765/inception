<script lang='ts'>
  import StyledPortrait from '$lib/components/StyledPortrait.svelte'
  import Project from '$lib/components/Project.svelte'
  import projects from '$lib/assets/projects.json'
  import { onMount } from 'svelte'
  import { Lightbulb, LightbulbOff } from 'lucide-svelte'

  // Set random hue and change the colour whenever the hue changes
  function getRandomHue() {
    return Math.floor(Math.random() * 360)
  }
  let randomHue = getRandomHue()
  $: colour = `hsl(${randomHue}, 50%, 50%)`

  // Set initial theme based on user's preference in localstorage
  let theme: string | null = null
  onMount(async () => {
    let darkScheme = window.matchMedia('(prefers-color-scheme: dark)')
    theme = darkScheme.matches ? 'dark' : 'light'
    localStorage.setItem('theme', theme)
    document.body.classList.add(theme)

    // TODO: unsubscribe?
    return 
  })

  // When the user toggles the theme, set in localstorage
  function toggleTheme() {
    // Determine what the current and switching theme is
    const currTheme = localStorage.getItem('theme');
    const newTheme = currTheme === 'dark' ? 'light' : 'dark'

    // Set theme in body class list and localstorage
    if (currTheme) document.body.classList.remove(currTheme)
    document.body.classList.toggle(newTheme);
    localStorage.setItem('theme', newTheme)
    theme = localStorage.getItem('theme')
  }

</script>

<div class='container'>
  <div class='header'>
    <h1>Thomas Dib</h1>
    <StyledPortrait colour={colour} changeHue={() => {
      randomHue = getRandomHue()
    }} />
  </div>
  <button class='light-dark-button' title='Toggle dark theme' on:click={toggleTheme}>
    {#if theme === 'dark'}
      <Lightbulb size={40} />
    {:else if theme === 'light'}
      <LightbulbOff size={40} />
    {/if}
  </button>

  {#each projects as project, idx}
    <Project {...project} reversed={idx % 2 === 1} theme={theme} colour={colour} />
  {/each}

</div>

<style lang='scss'>
  .container {
    .header {
      display: flex;
      flex-direction: column;
      align-items: center;

      h1 {
        font-size: 3rem;
      }
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7em;
  }

  .light-dark-button {
    position: absolute;
    top: 0;
    right: 0;
    margin: 2em;
    background: none;
    border: none;

    &:hover {
      cursor: pointer;
    }

    color: var(--text);
  }


</style>