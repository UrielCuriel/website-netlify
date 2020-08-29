<script lang="ts">
  import { getServices, getProjects } from "../api/cms"
  import { onMount, getContext } from "svelte"
  import type { IService, IProject } from "../types/contentful"
  import { fade, fly } from "svelte/transition"
  import { documentToHtmlString } from "@contentful/rich-text-html-renderer"
  import { url, isActive, metatags } from "@sveltech/routify"
  import { sizeStore } from "../store/tornis"
  import type { Project } from "../types/types"
  import { queryProjects } from "../api/queries"
  import { converter } from "../utils/showdown"
  let { showLogo } = getContext("nav")
  let projects: Project[]
  metatags.title = "Uriel Curiel | Proyectos"
  metatags.description = "Uriel Curiel IT Consultant"
  metatags.keywords =
    "IT Consultant,web developer,wix,FullStack,webiste,frontend"
  onMount(async () => {
    showLogo(true)
    projects = await fetch(
      "https://graphql.contentful.com/content/v1/spaces/z2zerwqbgp83?access_token=c8mJZPX9JYslaSSJYhLlddBzA-RKPQuS5l_kh2XFjng",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ query: queryProjects }),
      },
    )
      .then((r) => r.json())
      .then((data) => data.data.projectCollection.items)
  })
</script>

<style>
  .projects {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
</style>

<!-- {#if $isActive('/work')} -->
<div class="container mx-auto my-16 ">
  {#if projects}
    <h1 class="text-4xl text-primary-500">Proyectos</h1>
    <div class="projects col-gap-4">
      {#each projects as project, i}
        <div
          in:fly={{ y: 200, delay: i * 100 }}
          class="flex my-4 flex-col shadow-md p-2">
          <div class="w-full mx-0">
            <h1 class="text-xl text-support-500">{project.title}</h1>
            <p>
              {@html converter.makeHtml(project.description)}
            </p>
          </div>
          <div>
            {#each project.skillsCollection.items as skill}
              <div class="badge">{skill.name}</div>
            {/each}
          </div>
          <div>
            {#if project.url}
              <p>
                <a href={project.url} target="_blank">Visitar Sitio</a>
              </p>
            {/if}
          </div>
          <div class="mx-0 max-w-sm">
            {#if project.preview}
              <img
                src={project.preview.url}
                alt=""
                class="w-full h-32 object-contain" />
            {/if}
          </div>
        </div>
      {/each}
    </div>
  {/if}

</div>
<!-- {/if} -->
