<script lang="ts">
  import { getServices, getProjects } from "../api/cms"
  import { onMount } from "svelte"
  import type { IService, IProject } from "../types/contentful"
  import { fade } from "svelte/transition"
  import { documentToHtmlString } from "@contentful/rich-text-html-renderer"
  import { url } from "@sveltech/routify"

  let services: IService[]
  let projects: IProject[]
  onMount(async () => {
    services = await getServices()
    projects = await getProjects()
  })
</script>

<div class="w-full max-w-screen-lg mx-auto my-16 p-4">

  <h1 class="text-4xl text-primary-500">Mi Trabajo</h1>
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
  <h1 class="text-4xl text-primary-500 mt-4">Projectos</h1>
  {#if projects}
    {#each projects as project}
      <div transition:fade|local class="flex my-4 flex-col-reverse lg:flex-row">
        <div class="w-full mx-4">
          <h1 class="text-xl text-support-500 font-display">
            {project.fields.title}
          </h1>
          <p>
            {@html documentToHtmlString(project.fields.description)}
          </p>

        </div>
        <div class="mx-4 max-w-sm">
          <img
            src={project.fields.preview.fields.file.url}
            alt=""
            class="w-full h-32 object-cover" />
        </div>
      </div>
    {/each}
  {/if}

</div>
