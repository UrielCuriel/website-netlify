<script lang="ts">
  import { fade } from "svelte/transition"
  import { prefetch, url } from "@sveltech/routify"
  import type { IBlogPost } from "../types/contentful"
  export let post: IBlogPost
  export let mode = "card"
</script>

{#if mode === 'card'}
  <div
    transition:fade
    class="flex flex-col bg-white text-base shadow-xl w-64 h-64">
    <img
      src={post.fields.featuredImage.fields.file.url}
      alt={post.fields.title}
      class="w-64 h-auto object-cover" />
    <a
      href={$url('/blog/:slug', { slug: post.fields.slug })}
      use:prefetch={{ validFor: 60 * 24 }}>
      <h3 class="font-normal p-1 center text-base">{post.fields.title}</h3>
    </a>
    <span class="text-neutral-400 p-1">
      {new Date(post.fields.publishDate).toLocaleDateString()}
    </span>
    <div>
      {#each post.fields.tags as tag}
        <a
          href={$url(`/blog`, { filter: { tag: tag.sys.id } })}
          use:prefetch={{ validFor: 60 * 24 }}>
          <span class="badge">{tag.fields.tag}</span>
        </a>
      {/each}
    </div>
  </div>
{/if}
{#if mode === 'full'}
  <div transition:fade>
    <h3>{post.fields.title}</h3>
  </div>
{/if}
