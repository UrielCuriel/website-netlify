<script lang="ts">
  import { fly } from "svelte/transition"
  import { quintOut } from "svelte/easing"
  import { isActive, url } from "@sveltech/routify"
  import { setContext } from "svelte"
  import Logo from "./Logo.svelte"
  let active = false
  let disabled = false
  let activedTrasitions = []
  let showLogo = false
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
      text: "Mi forma de trabajar y mi portafolio está aqui",
    },
    {
      href: "/blog",
      name: "blog",
      segment: "blog",
      title: "Blog",
      text: "Mi vida como desarrollador puedes verla en esta sección",
    },
    {
      href: "/contact",
      name: "contact",
      segment: "contact",
      title: "Contacto",
      text: "Te interesa trabajar conmigo, adelante!",
    },
  ]
</script>

<style lang="postcss">
  .menu {
    @apply z-10 fixed right-0 top-0 m-3 bottom-0 left-0;
    user-select: none;
  }
  .menu-button {
    @apply w-16 h-12 p-3  rounded-md;
  }
  .menu-button.active {
    @apply bg-transparent;
  }
  .menu-button-container {
    @apply relative w-full h-full;
  }
  .menu-button.disabled {
    @apply pointer-events-none;
  }
  .menu-button span {
    @apply absolute w-full block bg-primary-500;
    transition: all 300ms cubic-bezier(0.55, 0.085, 0.68, 0.53);
    height: 2px;
  }
  .menu-button span:nth-child(1) {
    top: 0;
  }
  .menu-button span:nth-child(2) {
    top: 50%;
    margin-top: -1px;
  }
  .menu-button span:nth-child(3) {
    bottom: 0;
  }
  .menu-button.active span:nth-child(n) {
    top: 50%;
    margin-top: -0.125rem;
  }
  .menu-button.active span:nth-child(odd) {
    @apply transform;
    --transform-rotate: 225deg;
  }
  .menu-button.active span:nth-child(even) {
    @apply transform;
    --transform-rotate: 315deg;
  }
  .menu-list {
    @apply w-full h-full flex flex-col;
  }
  .menu-list-item {
    @apply w-full;
    height: 20vh;
    backdrop-filter: blur(6px);
  }
  @screen md {
    .menu-list {
      @apply flex-row;
    }
    .menu-list-item {
      @apply h-full w-1/5;
    }
  }
  .menu-list-item a {
    @apply w-full h-full flex flex-col bg-neutral-100 px-16 items-center justify-center text-neutral-500 capitalize text-center transition-all duration-500 ease-in-out bg-opacity-75;
    -webkit-user-drag: none;
  }
  .menu-list-item a:hover {
    @apply text-neutral-700;
    background-position: 0%;
  }
  .menu-list-item a span {
    @apply font-display font-bold text-xl text-support-500 transition-all duration-500 ease-in-out;
  }
  .menu-list-item a:hover span {
    @apply text-support-700;
  }
</style>

<header
  class="fixed right-0 top-0 w-screen {showLogo ? 'bg-neutral-100' : ''} flex
  justify-between h-12 z-20 items-center px-8">
  <span>
    <Logo show={showLogo} class="text-2xl font-normal" />
  </span>
  <button
    class="menu-button focus:outline-none"
    on:click={() => (active = !active)}
    class:disabled
    class:active
    aria-label="menu">
    <span class="sr-only">Menu</span>
    <div class="menu-button-container focus:outline-none">
      <span />
      <span />
      <span />
    </div>
  </button>
</header>

{#if active}
  <nav class="menu">
    <ul class="menu-list">
      {#each menu as item, i}
        <li
          class="menu-list-item"
          transition:fly={{ y: -600, delay: 250 + i * 100, duration: 300, easing: quintOut }}
          on:introstart={startTransition}
          on:introend={endTransition}
          on:outrostart={startTransition}
          on:outroend={endTransition}>
          <a on:click={() => (active = false)} href={$url(item.href)}>
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
