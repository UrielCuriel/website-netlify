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
      setSize($sizeStore.x / 1.3)

      moveSvg(0 - $width / 2.2, $sizeStore.y - $height / 2.2)
    }
  }
  onMount(async () => {
    showTitles(true)
    show(true)
    showLogo(true)
    services = await getServices()
  })
</script>

{#if $isActive('/skills')}
  <div
    transition:fly={{ y: -200, delay: 1700 }}
    class="w-full max-w-screen-lg float-right my-16 p-4">
    {#if services}
      {#each services as service}
        <div transition:fade|local class="flex flex-col-reverse lg:flex-row">
          <div class="div">
            <h1 class="text-xl text-support-500 font-display">
              {service.fields.title}
            </h1>
            <p>
              {@html documentToHtmlString(service.fields.description)}
            </p>
            <div class="flex py-3">
              {#each service.fields.examples as project}
                <a
                  transition:fade|local
                  href={$url('/project/:id', { id: project.sys.id })}
                  class="badge">
                  {project.fields.title}
                </a>
              {/each}
            </div>

          </div>
          <div class="mx-4">
            <img src={service.fields.featuredImage.fields.file.url} alt="" />
          </div>
        </div>
      {/each}
    {/if}
  </div>
{/if}
