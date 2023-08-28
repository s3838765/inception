<script lang='ts'>
  import StyledPortrait from '$lib/components/StyledPortrait.svelte'
  import Project from '$lib/components/Project.svelte'
  import Popup from '$lib/components/Popup.svelte'
  import projects from '$lib/assets/projects.json'
  import { onMount } from 'svelte'
  import { Lightbulb, LightbulbOff, Github, Linkedin, ChevronUp } from 'lucide-svelte'
  import { hue, updateHue } from '$lib/stores/colour'

  // Count how many times the user switches the light
  let lightCount = 0
  let popupOpen = false

  // Set initial theme based on user's preference in localstorage
  let theme: string | null = null
  onMount(() => {
    let prefersDark = window.matchMedia('(prefers-color-scheme: dark)')
    theme = prefersDark.matches ? 'dark' : 'light'
    document.body.classList.add(theme)

    updateHue()
  })

  $: if ($hue) {
    document.body.style.setProperty('--hue', $hue.toString())
  }

  // When the user toggles the theme, set in localstorage
  function toggleTheme() {
    // Determine what the current and switching theme is
    const newTheme = theme === 'dark' ? 'light' : 'dark'

    // Lights have broken
    if (lightCount > 10 && theme === 'dark') {
      popupOpen = true
      return
    }

    // Set theme in main content class list and localstorage
    if (theme) document.body.classList.remove(theme)
    document.body.classList.toggle(newTheme);
    theme = newTheme

    lightCount++
  }
</script>


<!-- Broken light popup -->
{#if popupOpen}
  <Popup
    title='Oh no!'
    description={'You\'ve broken the light switch!'}
    closeFn={() => popupOpen = false} />
{/if}

<div class='main-content' inert={popupOpen || null} style={`--hue: ${$hue}`}>
  <!-- Theme toggle button -->
  <button
    id='top'
    class='light-dark-button'
    title={`Turn the lights ${theme === 'dark' ? 'on' : 'off'}`}
    on:click={toggleTheme}
  >
    {#if theme === 'dark'}
      <Lightbulb size={35} />
    {:else if theme === 'light'}
      <LightbulbOff size={35} />
    {/if}
  </button>

  <!-- Header information (name, links, image) -->
  <div class='header'>
    <h1>Thomas Dib</h1>
    
    <div class='social-links'>
      <a href='https://github.com/tdib' target='_blank' rel='noreferrer'>
        <Github />
        GitHub
      </a>
      <a href='https://linkedin.com/in/tdib' target='_blank' rel='noreferrer'>
        <Linkedin />
        LinkedIn
      </a>
    </div>

    <StyledPortrait />
  </div>
    
  <!-- List of projects -->
  <div class='projects'>
    {#each projects as project, idx}
    <Project {...project} reversed={idx % 2 === 1} theme={theme} />
    {/each}
  </div>
  
  <a href='#top' title='Back to top' class='back-to-top' >
    <ChevronUp />
  </a>
</div>

<style lang='scss'>
  *:focus-visible {
    /* Fallback in case colour is not set for whatever reason */
    outline: 3px solid white;
    outline: 3px solid var(--colour);
    border-radius: .1em;
  }

  .light-dark-button {
    position: absolute;
    top: 0;
    right: 0;
    margin: 2em;
    background: none;
    border: none;
    color: var(--text);
    scroll-margin: 2em;

    &:hover {
      cursor: pointer;
    }

    /* Push light closer to corner */
    @media (max-width: 500px) {
      margin: 1em .25em;
    }
  }

  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-block: 5em;
    max-width: 100em;
    margin: auto;

    h1 {
      font-size: 3rem;
      margin-block-end: 0;
    }

    .social-links {
      display: flex;
      gap: 3em;
      margin-block: 3em;

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

  .projects {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10em;
    padding: 5em;
    max-width: 100em;
    margin: auto;
  }

  .back-to-top {
    color: var(--text);
    background-color: var(--surface);
    border-radius: 1em 1em 0em 0em;
    display: flex;
    width: 5em;
    justify-content: center;
    margin-inline: auto;
  }


  @media (max-width: 500px) {
    .main-content {
      .header .social-links {
        flex-direction: column;
        gap: 1em;
        margin-block-start: 1em;
      }

      .projects {
        padding: 3em;
      }
    }

  }

</style>
