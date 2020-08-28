<script lang="ts">
  import { fade, fly } from "svelte/transition"
  import type { IAuthor, IProjectFields, IProject } from "../types/contentful"
  import { converter } from "../utils/showdown"
  import { onMount } from "svelte"
  import {
    getProfile,
    getEntriesById,
    getProjectsByService,
    getEntryById,
  } from "../api/cms"
  import { each, onDestroy, getContext } from "svelte/internal"
  import { documentToHtmlString } from "@contentful/rich-text-html-renderer"
  import { url, beforeUrlChange, isActive } from "@sveltech/routify"
  import { sizeStore } from "../store/tornis"
  import { writable } from "svelte/store"
  import { profile } from "../store/profile"
  let { showLogo } = getContext("nav")

  onMount(async () => {
    showLogo(true)
  })
</script>

{#if $isActive('/about')}
  {#await $profile then profile}
    <div class="container min-h-screen h-screen flex items-center m-auto">
      <div class="w-2/3 text-2xl text-neutral-600 p-4">
        {@html converter.makeHtml(profile.resume)}
      </div>
      <div class="w-1/3 overflow-hidden shadow-lg rounded-full">
        <img src={profile.profilePic.url} alt="" />
      </div>
    </div>
  {/await}
{/if}
