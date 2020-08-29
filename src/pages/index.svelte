<script lang="ts">
  import { onMount, onDestroy, getContext, beforeUpdate } from "svelte"
  import {
    metatags,
    beforeUrlChange,
    isActive,
    params,
  } from "@sveltech/routify"
  import { fly, fade } from "svelte/transition"

  import { scrollStore, sizeStore } from "../store/tornis"
  import type { EntryCollection } from "contentful"
  import type { IBlogPost, IAuthor } from "../types/contentful"

  import Typing from "../components/Typing.svelte"
  import Posts from "../components/Posts.svelte"
  import { converter } from "../utils/showdown"
  import Logo from "../components/Logo.svelte"
  import { writable } from "svelte/store"
  import { queryProfile } from "../api/queries"
  import { profile } from "../store/profile"
  metatags.title = "Uriel Curiel"
  metatags.description = "Uriel Curiel IT Consultant"
  metatags.keywords =
    "IT Consultant,web developer,wix,FullStack,webiste,frontend"
  const texts = ["Fullstack Developer", "Life Hacker", "IT Consultant"]
  let sumary
  let posts: EntryCollection<IBlogPost>

  let { showLogo } = getContext("nav")
  $: {
    showLogo($scrollStore.top >= $sizeStore.y)
  }
  const scrollTo = (element) => {
    if (element) window.scroll({ top: element.offsetTop, behavior: "smooth" })
  }
</script>

{#if $isActive('')}
  <div transition:fly={{ x: 800, duration: 1200 }} class="w-full">
    <div class="w-full h-screen">
      <div
        class="w-full h-full grid text-center relative content-center
        items-center justify-center">
        <Logo
          show={$isActive('')}
          class="text-12xl font-thin"
          style={`transform: translate(0,${$scrollStore.top * 0.5}px);opacity: ${($sizeStore.y - $scrollStore.top) / $sizeStore.y}`} />
        <h2
          in:fade={{ delay: 750 }}
          out:fly={{ y: 20 }}
          class="text-3xl text-neutral-300 font-semibold select-none"
          style={`transform: translate(0,${$scrollStore.top * 0.3}px);opacity: ${($sizeStore.y - $scrollStore.top) / $sizeStore.y}`}>

          <Typing {texts} />
        </h2>
      </div>
    </div>
  </div>
  {#await $profile then profile}
    {#if profile}
      <div class="container min-h-screen h-screen flex items-center m-auto">
        <div
          class="w-2/3 text-2xl text-neutral-600 p-4"
          style={`transform: translate(${$scrollStore.top - $sizeStore.y}px,0);`}>
          {@html converter.makeHtml(profile.resume)}
        </div>
        <div
          class="w-1/3 overflow-hidden shadow-lg rounded-full"
          style={`transform: translate(${$sizeStore.y - $scrollStore.top}px,0);`}>
          <img src={profile.profilePic.url} alt="" />
        </div>
      </div>
    {/if}
  {:catch}
    <span>no data</span>
  {/await}
{/if}
