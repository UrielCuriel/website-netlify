<script lang="ts">
  import { onMount } from "svelte"
  import { getEntryById } from "../../api/cms"
  import type { IProjectFields, IProject } from "../../types/contentful"
  import { documentToHtmlString } from "@contentful/rich-text-html-renderer"
  import { isActive } from "@sveltech/routify"
  import { fade } from "svelte/transition"
  import Loading from "../../components/Loading.svelte"

  export let id
  let project: IProject
  onMount(async () => {
    project = (await getEntryById<IProjectFields>(id)) as IProject
  })
</script>

{#if project && $isActive(`/project/${id}`)}
  <div
    in:fade|local={{ delay: 1500 }}
    out:fade|local={{ delay: 0 }}
    class="w-full max-w-screen-lg mx-auto my-12 p-4">
    <h1 class="text-3xl text-support-500 font-display text-center">
      {project.fields.title}
    </h1>
    <p class="Post">
      {@html documentToHtmlString(project.fields.description)}
    </p>
    {#if project.fields.url}
      <a href={project.fields.url} target="_blank">Visitar Sitio</a>
    {/if}
    <p>
      <img src={project.fields.preview.fields.file.url} alt="" />
    </p>
  </div>
{:else}
  <Loading />
{/if}
