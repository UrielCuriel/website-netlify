<script lang="ts">
  import { getServices, getProjects } from "../api/cms"
  import { onMount, getContext } from "svelte"
  import type { IService, IProject } from "../types/contentful"
  import { fade, fly } from "svelte/transition"
  import { documentToHtmlString } from "@contentful/rich-text-html-renderer"
  import { url, isActive } from "@sveltech/routify"
  import { sizeStore } from "../store/tornis"
  let { show, svg, moveSvg, showTitles, setSize, width, height } = getContext(
    "landing",
  )
  let { showLogo } = getContext("nav")
  let services: IService[]
  let projects: IProject[]
  $: {
    if ($sizeStore.x && $svg) {
      setSize($sizeStore.x / 1.7)

      moveSvg(0 - $width / 2.2, 0 - $height / 2.6)
    }
  }
  onMount(async () => {
    showTitles(true)
    show(true)
    showLogo(true)
    projects = await getProjects()
  })
</script>

{#if $isActive('/work')}
  <div
    transition:fly={{ x: 200, delay: 1500 }}
    class="w-full max-w-screen-md float-right my-16 p-8">
    {#if projects}
      <h1 class="text-4xl text-primary-500">Proyectos</h1>
      {#each projects as project}
        <div
          transition:fade|local
          class="flex my-4 flex-col-reverse lg:flex-row">
          <div class="w-full mx-0">
            <h1 class="text-xl text-support-500 font-display">
              {project.fields.title}
            </h1>
            <p>
              {@html documentToHtmlString(project.fields.description)}
            </p>
            {#if project.fields.url}
              <p>
                <a href={project.fields.url} target="_blank">Visitar Sitio</a>
              </p>
            {/if}
          </div>
          <div class="mx-0 max-w-sm">
            <img
              src={project.fields.preview.fields.file.url}
              alt=""
              class="w-full h-32 object-cover" />
          </div>
        </div>
      {/each}
    {/if}

  </div>
{/if}
