<script lang='ts'>
  import StyledPortrait from '$lib/components/StyledPortrait.svelte'
  import Project from '$lib/components/Project.svelte'
  import Popup from '$lib/components/Popup.svelte'
  import projects from '$lib/assets/projects.json'
  import { onMount } from 'svelte'
  import { Lightbulb, LightbulbOff, Github, Linkedin } from 'lucide-svelte'

  // Set random hue and change the colour whenever the hue changes
  function getRandomHue() {
    return Math.floor(Math.random() * 360)
  }
  let randomHue = getRandomHue()
  $: colour = `hsl(${randomHue}, 50%, 50%)`

  // Count how many times the user switches the light
  let lightCount = 0
  let popupOpen = false

  // Set initial theme based on user's preference in localstorage
  let theme: string | null = null
  onMount(() => {
    theme = localStorage.getItem('theme')
    if (!theme) {
      let darkScheme = window.matchMedia('(prefers-color-scheme: dark)')
      theme = darkScheme.matches ? 'dark' : 'light'
      localStorage.setItem('theme', theme)
    }
    document.body.classList.add(theme)
  })

  // When the user toggles the theme, set in localstorage
  function toggleTheme() {
    // Determine what the current and switching theme is
    const currTheme = localStorage.getItem('theme');
    const newTheme = currTheme === 'dark' ? 'light' : 'dark'

    // Lights have broken
    if (lightCount > 10 && theme === 'dark') {
      popupOpen = true
      return
    }

    // Set theme in body class list and localstorage
    if (currTheme) document.body.classList.remove(currTheme)
    document.body.classList.toggle(newTheme);
    localStorage.setItem('theme', newTheme)
    theme = localStorage.getItem('theme')

    lightCount++
  }
</script>

<!-- Broken light popup -->
{#if popupOpen}
  <Popup
    title='Oh no!'
    description={'You\'ve broken the light switch!'}
    colour={colour}
    closeFn={() => popupOpen = false} />
{/if}

<div class='container' style='--colour: {colour}' inert={popupOpen || null}>
  <button class='light-dark-button' title={`Turn the lights ${theme === 'dark' ? 'on' : 'off'}`} on:click={toggleTheme}>
    {#if theme === 'dark'}
      <Lightbulb size={35} />
    {:else if theme === 'light'}
      <LightbulbOff size={35} />
    {/if}
  </button>

  <div class='header'>
    <h1>Thomas Dib</h1>

    <div class='social-links'>
      <a href='https://github.com/tdib' target='_blank'>
        <Github />
        GitHub
      </a>
      <a href='https://linkedin.com/in/tdib' target='_blank'>
        <Linkedin />
        LinkedIn
      </a>
    </div>

    <StyledPortrait colour={colour} changeHue={() => {
      randomHue = getRandomHue()
    }} />
  </div>

  {#each projects as project, idx}
    <Project {...project} reversed={idx % 2 === 1} theme={theme} colour={colour} />
  {/each}

</div>

<style lang='scss'>
  .container {
    *:focus-visible {
      outline: 3px solid var(--colour);
      border-radius: .1em;
    }
    .header {
      display: flex;
      flex-direction: column;
      align-items: center;

      h1 {
        font-size: 3rem;
        margin-block-end: 0;
      }

      .social-links {
        display: flex;
        gap: 3em;
        margin-block: 2em;

        @media (max-width: 500px) {
          flex-direction: column;
          gap: 1em;
          margin-block-start: 1em;
        }
        
        a {
          display: flex;
          gap: 1em;
          color: var(--text);
          background-color: var(--surface);
          text-decoration: none;
          padding: 1em 2em;
          border-radius: 5em;
          font-weight: bold;
        }
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