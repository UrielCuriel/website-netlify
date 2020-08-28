<script lang="ts">
  import Icon from "./Icon.svelte"
  import { slide } from "svelte/transition"
  import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
  import type { IconDefinition } from "@fortawesome/fontawesome-svg-core"
  import classnames from "../utils/classnames"
  export let buttonClass: string = ""
  export let iconClass: string = "w-3"
  export let disabled: boolean = false
  export let menuClass: string = ""
  export let open: boolean = false
  export let title: string = null
  export let icon: IconDefinition = faChevronDown
  export let animateIcon: boolean = true
  export let close = () => {
    open = false
  }

  let buttonElement
  let menuElement

  let handleKeyDown = ({ key }) => {
    if (key === "Escape") {
      close()
    }
  }

  let handleWindowClick = (event) => {
    const path = event.path || event.composedPath()
    if (path.includes(buttonElement) || path.includes(menuElement)) {
      return
    }
    close()
  }
  $: showMenu = !!open
</script>

<svelte:options accessors />
<svelte:window on:click={handleWindowClick} on:keydown={handleKeyDown} />

<div class={classnames('relative inline-block', $$props.class)} {title}>

  <button
    type="button"
    bind:this={buttonElement}
    class={classnames('focus:outline-none whitespace-no-wrap flex items-center justify-between overflow-hidden', buttonClass)}
    {disabled}
    on:click={() => (open = !open)}>
    <slot name="button" />
    <Icon
      {icon}
      class={classnames(
        'transition-transform ease-in duration-300 transform',
        iconClass,
        { '-rotate-180': animateIcon && open },
      )} />
  </button>

  {#if showMenu}
    <div
      bind:this={menuElement}
      class={classnames('w-32 py-1 z-10 absolute m-1 bg-white shadow-md overflow-y-auto rounded', menuClass)}
      transition:slide>
      <slot name="menu" />
    </div>
  {/if}
  <slot />
</div>
