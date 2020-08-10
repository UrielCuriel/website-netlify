<script lang="ts">
  import { onMount } from "svelte"
  import { getSocialMedia } from "../api/cms"
  import type { IAuthor } from "../types/contentful"

  let profile: IAuthor
  onMount(async () => {
    profile = (await getSocialMedia()) as IAuthor
  })
</script>

{#if profile}
  <footer class="w-full flex justify-end p-4 bg-neutral-100 bottom-0 fixed">
    {#each profile.fields.socialMedia as { href, name, value }}
      <a
        {href}
        rel="noreferrer"
        class="text-neutral-400 hover:text-support-500"
        target="_blank"
        aria-label={name}>
        <span class="sr-only">{value}</span>
        <i class="fab fa-{name} text-xl m-2" />
      </a>
    {/each}
  </footer>
{/if}
