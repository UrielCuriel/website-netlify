<script lang="ts">
  import { fade } from "svelte/transition"
  import type { IAuthor, IProjectFields, IProject } from "../types/contentful"
  import { converter } from "../utils/showdown"
  import { onMount } from "svelte"
  import {
    getProfile,
    getEntriesById,
    getProjectsByService,
    getEntryById,
  } from "../api/cms"
  import { each, onDestroy } from "svelte/internal"
  import { documentToHtmlString } from "@contentful/rich-text-html-renderer"
  import { url, beforeUrlChange } from "@sveltech/routify"

  let profile: IAuthor
  $: bio = profile && converter.makeHtml(profile.fields.bio)
  $: resume = profile && converter.makeHtml(profile.fields.resume)
  onMount(async () => {
    profile = (await getProfile()) as IAuthor
  })
  function getProject(id) {
    return getEntryById<IProjectFields>(id)
  }
  $beforeUrlChange(() => {
    console.log("exit about")
    return true
  })
</script>

{#if profile}
  <div
    transition:fade|local
    class="container mx-auto my-16 text-neutral-600 p-4">

    <div
      class="flex justify-center items-center flex-col-reverse lg:flex-row py-8 ">
      <div>
        <h1 class="text-4xl text-primary-500">Acerca de Mí</h1>
        {@html resume}
      </div>
      <div
        class="w-full max-w-sm m-5 rounded-full shadow-inner overflow-hidden ">
        <img
          src={profile.fields.profilePic.fields.file.url}
          alt={profile.fields.name}
          class="-z-2 relative" />
      </div>
    </div>
    <div class="Post text-base">
      {@html bio}
      <a
        href="work"
        rel="prefetch"
        class="text-xl text-center text-support-500">
        Por acá encontrarás información de mi trabajo
      </a>
    </div>
  </div>
{/if}
