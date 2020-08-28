<script lang="ts">
  import { onMount } from "svelte"
  import { getSocialMedia } from "../api/cms"
  import type { IAuthor } from "../types/contentful"
  import { url } from "@sveltech/routify"

  let profile: IAuthor
  onMount(async () => {
    profile = (await getSocialMedia()) as IAuthor
  })
</script>

{#if profile}
  <footer
    class="w-full flex justify-between bottom-0 fixed z-50 bg-white
    bg-opacity-75 bg-blur items-center">
    <div class="contact">
      {#each profile.fields.socialMedia as { href, name, value }}
        <a
          {href}
          rel="noreferrer"
          class="text-neutral-400 hover:text-support-500 "
          target="_blank"
          aria-label={name}>
          <span class="sr-only">{value}</span>
          <i class="fab fa-{name} text-xl m-2" />
        </a>
      {/each}
      <a
        href="mailto:urielcuriel@outlook.com?subject=Hola%20me%20gustó%20tu%20trabajo%20y%20tengo%20una%20propuesta"
        class="text-neutral-400 hover:text-support-500 ">
        <span class="sr-only">contact mail</span>
        <i class="fas fa-envelope text-xl m-2" />
      </a>
    </div>
    <div class="mx-4 text-neutral-400">
      crafted by
      <a href={$url('/')}>Uriel Curiel</a>
      &copy; {new Date().getFullYear()}
    </div>
  </footer>
{/if}
