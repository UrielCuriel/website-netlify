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
  import { sizeStore, scrollStore } from "../store/tornis"
  import { writable } from "svelte/store"
  import { profile } from "../store/profile"
  import type { Skill } from "../types/types"
  import { querySkills } from "../api/queries"
  let { showLogo } = getContext("nav")

  $: x = $scrollStore.top / $sizeStore.y

  $: profilePicPos = `${
    x > 1.2 ? $scrollStore.top - $sizeStore.y * 1.2 : 0
  }px,${$scrollStore.top}px`
  let skills: {
    [n: string]: Skill[]
  } | void
  onMount(async () => {
    showLogo(true)
    skills = await fetch(
      "https://graphql.contentful.com/content/v1/spaces/z2zerwqbgp83?access_token=c8mJZPX9JYslaSSJYhLlddBzA-RKPQuS5l_kh2XFjng",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ query: querySkills }),
      },
    )
      .then((r) => r.json())
      .then((data) =>
        (data.data.skillCollection.items as Skill[]).reduce((group, item) => {
          group[item["type"]] = [...(group[item["type"]] || []), item]
          return group
        }, {}),
      )
      .catch((err) => {
        console.log(err)
      })
  })
  $: opacity = (center, maxOpacity = 1, minOpacity = 0) => {
    return Math.abs(
      center -
        Math.sqrt(
          Math.abs(
            (minOpacity * -1) ** 2 +
              2 * (minOpacity * x) +
              maxOpacity ** 2 -
              x ** 2,
          ),
        ),
    )
  }
</script>

<style>
  .skills {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    align-content: center;
  }
</style>

{#if $isActive('/about')}
  <div class="container m-auto">
    {#await $profile then profile}
      {#if profile}
        <div
          class="min-h-screen h-full flex flex-col-reverse md:flex-row
          items-center relative justify-end">
          <div
            class="w-full md:w-2/3 md:text-2xl text-neutral-600 p-4"
            style={`transform: translate(0,${$scrollStore.top * 0.5}px); opacity: ${opacity(0)}`}>
            {@html converter.makeHtml(profile.resume)}
          </div>
          <div
            class="w-2/3 md:w-1/3 overflow-hidden shadow-lg rounded-full z-20"
            style={`transform: translate(${profilePicPos});`}>
            <img src={profile.profilePic.url} alt="" />
          </div>
        </div>
        <div
          class="min-h-screen h-full flex flex-col-reverse md:flex-row
          items-center relative justify-center">
          <div
            class="w-full md:w-2/3 md:text-2xl text-neutral-600 p-4 mt-12"
            style={`transform: translate(0,${x > 1 ? ($scrollStore.top - $sizeStore.y * 1) * 0.3 : 0}px);opacity: ${opacity(1.5)}`}>
            {@html converter.makeHtml(profile.bio)}
          </div>
          <div
            class="w-5/6 md:w-1/3 overflow-hidden shadow-lg rounded-full z-20 " />
        </div>
      {/if}
      <div class="min-h-screen h-full grid content-center p-4">
        {#if skills}
          <div class="">
            <h2 class="text-2xl font-bold">Habilidades</h2>
          </div>
          <div class="grid skills col-gap-3 items-center ">
            {#each skills['lang'] as skill}
              <div class="">
                <p>
                  {skill.name}
                  <span class="text-xs opacity-75">
                    {skill.years} año{skill.years > 1 ? 's' : ''}
                  </span>
                </p>
                <div class="bg-support-100 relative w-full shadow-md">
                  <div
                    class="h-1 bg-support-500"
                    style="width:{(skill.years * 100) / 6}%" />
                </div>
              </div>
            {/each}
            {#each skills['frontend'] as skill}
              <div>
                <p>
                  {skill.name}
                  <span class="text-xs opacity-75">
                    {skill.years} año{skill.years > 1 ? 's' : ''}
                  </span>
                </p>
                <div class="bg-support-100 relative w-full shadow-md">
                  <div
                    class="h-1 bg-support-500"
                    style="width:{(skill.years * 100) / 6}%" />
                </div>
              </div>
            {/each}
            {#each skills['backend'] as skill}
              <div>
                <p>
                  {skill.name}
                  <span class="text-xs opacity-75">
                    {skill.years} año{skill.years > 1 ? 's' : ''}
                  </span>
                </p>
                <div class="bg-support-100 relative w-full shadow-md">
                  <div
                    class="h-1 bg-support-500"
                    style="width:{(skill.years * 100) / 6}%" />
                </div>
              </div>
            {/each}
            {#each skills['db'] as skill}
              <div class="">
                <p>
                  {skill.name}
                  <span class="text-xs opacity-75">
                    {skill.years} año{skill.years > 1 ? 's' : ''}
                  </span>
                </p>
                <div class="bg-support-100 relative w-full shadow-md">
                  <div
                    class="h-1 bg-support-500"
                    style="width:{(skill.years * 100) / 6}%" />
                </div>
              </div>
            {/each}
          </div>
        {/if}

      </div>
    {:catch}
      <span>no data</span>
    {/await}
  </div>
{/if}
