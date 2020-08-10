<script lang="ts">
  import { onMount, onDestroy, getContext, beforeUpdate } from "svelte"
  import { metatags, beforeUrlChange } from "@sveltech/routify"
  import { fly, fade } from "svelte/transition"

  import { scrollStore, sizeStore } from "../store/tornis"
  import type { EntryCollection } from "contentful"
  import type { IBlogPost, IAuthor } from "../types/contentful"
  import { getPosts, getProfile } from "../api/cms"

  import Typing from "../components/Typing.svelte"
  import Posts from "../components/Posts.svelte"
  import { converter } from "../utils/showdown"
  import Logo from "../components/Logo.svelte"

  metatags.title = "Uriel Curiel"
  metatags.description = "Uriel Curiel IT Consultant"
  metatags.keywords =
    "IT Consultant,web developer,wix,FullStack,webiste,frontend"
  const texts = ["Fullstack Developer", "Life Hacker", "IT Consultant"]
  let sumary
  let posts: EntryCollection<IBlogPost>
  let profile: IAuthor
  let { showLogo } = getContext("nav")
  $: resume = profile && converter.makeHtml(profile.fields.resume)
  $: {
    showLogo($scrollStore.top > $sizeStore.y)
  }
  const scrollTo = (element) => {
    if (element) window.scroll({ top: element.offsetTop, behavior: "smooth" })
  }
  beforeUpdate((v) => {
    console.log()
  })
  onMount(async () => {
    posts = await getPosts({ limit: 5 })
    profile = (await getProfile()) as IAuthor
  })
</script>

<div class="w-full">
  <div class="w-full h-screen">
    {#if $scrollStore.top < $sizeStore.y}
      <div
        class="w-full h-full grid justify-center content-center text-center
        relative">
        <Logo
          show={$scrollStore.top < $sizeStore.y}
          class="text-12xl font-thin"
          style={`transform: translate(0,${$scrollStore.top * 0.4}px);opacity: ${($sizeStore.y - $scrollStore.top) / $sizeStore.y}`} />
        <h2
          transition:fade={{ delay: 750 }}
          class="text-3xl text-neutral-300 font-semibold"
          style={`transform: translate(0,${$scrollStore.top * 0.3}px);opacity: ${($sizeStore.y - $scrollStore.top) / $sizeStore.y}`}>

          <Typing {texts} />
        </h2>
      </div>
      <button
        transition:fade={{ delay: 1000 }}
        on:click={() => scrollTo(sumary)}
        style={`opacity: ${($sizeStore.y - $scrollStore.top) / $sizeStore.y};transform: translate(${$sizeStore.x / 2 - 24}px,${$sizeStore.y * 0.8 - 24}px)`}
        class="w-12 h-12 fill-current text-neutral-400 absolute top-0 left-0
        focus:outline-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="w-12 h-12 ">
          <path
            fill-rule="evenodd"
            d="M15.3 10.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1
            1.4-1.4l3.3 3.29 3.3-3.3z" />
        </svg>
      </button>
    {/if}
  </div>
  <div
    bind:this={sumary}
    class="m-8 pt-16 h-full min-h-screen text-base md:text-3xl text-neutral-700
    lg:flex lg:flex-row flex-col items-center justify-center lg:flex-wrap mb-16">
    {#if $scrollStore.top >= (1 * $sizeStore.y) / 3}
      <div
        class="sumary w-full lg:w-1/2 "
        transition:fly|local={{ x: -300, delay: 300 }}>
        <div>
          {@html resume}
        </div>
        <p>
          <a
            href="about"
            rel="prefetch"
            class="text-xl text-center text-primary-500">
            Aquí encontrarás un poco más sobre mí
          </a>
        </p>
        <p>
          <a
            href="work"
            rel="prefetch"
            class="text-xl text-center text-primary-500">
            Por acá encontrarás información de mi trabajo
          </a>
        </p>
      </div>
      <div
        class=" w-full lg:w-1/3 p-4"
        transition:fly|local={{ x: 300, delay: 300 }}>
        <img src="assets/undraw_developer_activity_bv83.svg" alt="" class="" />
      </div>
      {#if posts}
        <div transition:fade class="posts">
          <h1 class="text-support-500 text-center">
            Últimas publicaciones de mi blog
          </h1>
          <Posts posts={posts.items} />
        </div>
      {/if}
    {/if}
  </div>
</div>
