<script lang="ts">
  import { fly, fade, crossfade, scale, draw } from "svelte/transition"
  import { quintOut } from "svelte/easing"
  import { isActive, url, goto, page, params } from "@sveltech/routify"
  import { setContext } from "svelte"
  import Logo from "./Logo.svelte"
  import Dropdown from "./Dropdown.svelte"
  import {
    faLanguage,
    faTimes,
    faBars,
  } from "@fortawesome/free-solid-svg-icons"
  const [send, receive] = crossfade({
    duration: 200,
    fallback: draw,
  })
  import { locales, locale } from "../api/cms"
  import Icon from "./Icon.svelte"
  let active = false
  let disabled = false
  let activedTrasitions = []
  export let showLogo: boolean = false
  const startTransition = () => {
    activedTrasitions.push(true)
    disabled = activedTrasitions.length > 0
  }
  const endTransition = () => {
    activedTrasitions.pop()
    disabled = activedTrasitions.length > 0
  }
  setContext("nav", {
    showLogo: (value) => {
      showLogo = value
    },
  })
  let openLang: boolean = false
  const selectLang = (lang) => {
    $goto($page.path, { locale: lang.code })
    openLang = false
  }
  const menu = [
    {
      href: "/",
      name: "home",
      segment: undefined,
      title: "Inicio",
      text: "Aquí encontrarás información general",
    },
    {
      href: "/about",
      name: "about",
      segment: "about",
      title: "Acerca",
      text: `Conoce más sobre mí`,
    },
    {
      href: "/work",
      name: "work",
      segment: "work",
      title: "Mi Trabajo",
      text: "mi portafolio está aqui",
    },
    // {
    //   href: "/skills",
    //   name: "skills",
    //   segment: "skills",
    //   title: "Habilidades",
    //   text: "Mis habilidades las encuentras en esta sección",
    // },
    {
      href: "/blog",
      name: "blog",
      segment: "blog",
      title: "Blog",
      text: "Mi blog lo puedes encotrar aquí",
    },
  ]
</script>

<style lang="postcss">
  .menu {
    @apply z-40 fixed right-0 top-0 m-0  mt-12 bottom-0 left-0;
    user-select: none;
  }
  .menu-list {
    @apply w-full h-full flex flex-col list-none;
  }
  .menu-list-item {
    @apply w-full;
    height: 20vh;
  }
  @screen md {
    .menu-list {
      @apply flex-row;
    }
    .menu-list-item {
      @apply h-full w-1/4;
    }
  }
  .menu-list-item a {
    @apply w-full h-full flex flex-col bg-white px-16 items-center justify-center text-neutral-500 capitalize text-center transition-all duration-500 ease-in-out bg-opacity-75;
    -webkit-user-drag: none;
  }
  .menu-list-item a:hover {
    @apply text-neutral-700;
    background-position: 0%;
  }
  .menu-list-item a span {
    @apply font-display  text-xl text-support-500 transition-all duration-500 ease-in-out;
  }
  .menu-list-item a:hover span {
    @apply text-support-700;
  }
  .st0 {
    fill: none;
    stroke: currentColor;
    stroke-width: 40;
    stroke-linecap: round;
    stroke-linejoin: bevel;
    stroke-miterlimit: 10;
  }
</style>

<header
  class="fixed right-0 top-0 w-screen transition-colors duration-500 ease-in-out
  {showLogo || active ? 'bg-white bg-opacity-75 bg-blur' : ''} flex
  justify-between h-12 z-50 items-center px-8 select-none">
  <span>
    <a href={$url('/')}>
      <Logo show={showLogo || active} class="text-2xl font-normal" />
    </a>
  </span>
  <div class="flex items-center ">
    <button class=" mx-2 focus:outline-none" />
    <Dropdown
      class="h-12 w-12 mx-2"
      buttonClass="h-12 w-12 text-neutral-600 select-none"
      menuClass="right-0 mr-1 select-none"
      title="titulo"
      icon={faLanguage}
      iconClass="text-support-300 w-8 h-8 hidden"
      animateIcon={false}
      open={openLang}>
      <span slot="button">{$params.locale}</span>
      <div slot="menu" class="text-neutral-600">
        {#each $locales as lang}
          <button
            class="px-2 py-1 block w-full hover:text-support-600 text-sm {lang.code == $params.locale ? 'text-support-600' : ''}"
            on:click={() => selectLang(lang)}>
            {lang.name}
          </button>
        {/each}
      </div>
    </Dropdown>
    <button
      class="focus:outline-none text-primary-600 relative w-6 h-6
      overflow-hidden"
      on:click={() => (active = !active)}
      aria-label="menu">
      <span class="sr-only">Menu</span>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 512 512"
        xml:space="preserve">
        {#if active}
          <line
            in:draw={{ delay: 250, duration: 200 }}
            out:draw={{ duration: 200 }}
            class="st0"
            x1="96.8"
            y1="83"
            x2="347.2"
            y2="333.4" />
          <line
            in:draw={{ delay: 250, duration: 200 }}
            out:draw={{ duration: 200 }}
            class="st0"
            x1="89.1"
            y1="422.9"
            x2="422.9"
            y2="89.1" />
          <line
            in:draw={{ delay: 250, duration: 200 }}
            out:draw={{ duration: 200 }}
            class="st0"
            x1="263.7"
            y1="249.9"
            x2="430.6"
            y2="416.8" />
        {:else}
          <line
            in:draw={{ delay: 250, duration: 200 }}
            out:draw={{ duration: 200 }}
            class="st0"
            x1="492"
            y1="256"
            x2="138"
            y2="256" />
          <line
            in:draw={{ delay: 250, duration: 200 }}
            out:draw={{ duration: 200 }}
            class="st0"
            x1="492"
            y1="20"
            x2="20"
            y2="20" />
          <line
            in:draw={{ delay: 250, duration: 200 }}
            out:draw={{ duration: 200 }}
            class="st0"
            x1="492"
            y1="492"
            x2="256"
            y2="492" />
        {/if}

      </svg>

    </button>

  </div>
</header>

{#if active}
  <nav class="menu">
    <ul class="menu-list">
      {#each menu as item, i}
        <li
          class="menu-list-item bg-blur"
          transition:fly={{ y: -600, delay: 250 + i * 100, duration: 300, easing: quintOut }}
          on:introstart={startTransition}
          on:introend={endTransition}
          on:outrostart={startTransition}
          on:outroend={endTransition}>
          <a
            on:click={() => (active = false)}
            href={$url(item.href, { ...$params })}>
            <span
              transition:fly={{ y: -300, duration: 600, delay: 300 + i * 100 }}>
              {item.title}
            </span>
            <p
              transition:fly={{ y: -100, duration: 600, delay: 400 + i * 100 }}>
              {item.text}
            </p>
          </a>
        </li>
      {/each}
    </ul>
  </nav>
{/if}
<slot />
