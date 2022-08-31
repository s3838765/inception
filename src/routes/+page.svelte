<script lang='ts'>
  import StyledPortrait from '$lib/components/StyledPortrait.svelte'
  import Project from '$lib/components/Project.svelte'
  import projects from '$lib/assets/projects.json'
  import { onMount } from 'svelte'
  import { Lightbulb, LightbulbOff } from 'lucide-svelte'

  function getRandomHue() {
    return Math.floor(Math.random() * 360)
  }
  let randomHue = getRandomHue()

  $: colour = `hsl(${randomHue}, 50%, 50%)`

  let theme: string | null = null

  onMount(async () => {
    // Set initial theme based on user's preference in localstorage
    let darkScheme = window.matchMedia('(prefers-color-scheme: dark)')
    if (darkScheme.matches)
        theme = document.body.classList.contains('light-mode') ? 'light' : 'dark'
    else
        theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light'
    localStorage.setItem('theme', theme)


    // TODO: unsubscribe?
    return 
  })

    // When the user toggles the theme, set in localstorage
    function toggleTheme() {
      console.log('changing theme');
      let currTheme = localStorage.getItem('theme');
      if (currTheme == 'dark')
        document.body.classList.toggle('light-mode');
      else if (currTheme == 'light')
        document.body.classList.toggle('dark-mode');
      localStorage.setItem('theme', currTheme === 'dark' ? 'light' : 'dark')
    }

  // let isDark = false
</script>

<div class='container'>
  <div class='header'>
    <h1>Thomas Dib</h1>
    <StyledPortrait colour={colour} changeHue={() => {
      randomHue = getRandomHue()
    }} />
  </div>
  <button class='light-dark-button'>
    {#if theme === 'dark'}
      <Lightbulb size={40} on:click={toggleTheme}/>
    {:else if theme === 'light'}
      <LightbulbOff size={40} onclick={toggleTheme}/>
    {/if}
  </button>

  {#each projects as project, idx}
    <Project {...project} reversed={idx % 2 === 1} colour={colour} />
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
  }


</style>