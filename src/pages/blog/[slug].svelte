<script lang="ts">
  import { onMount } from "svelte"
  import type { IBlogPost } from "../../types/contentful"
  import type { Entry } from "contentful"
  import { documentToHtmlString } from "@contentful/rich-text-html-renderer"
  import { getPostBySlug } from "../../api/cms"
  let post: IBlogPost
  $: html = post && documentToHtmlString(post.fields.body)
  export let slug
  onMount(async () => {
    post = await getPostBySlug(slug)
  })
</script>

<style lang="postcss">
  .Post {
    display: grid;
    justify-items: center;
    margin: auto;
    justify-content: center;
    grid-template-columns: minmax(auto, theme("screens.lg")) 300px;
    grid-template-areas: "header header" "content content" "sidebar sidebar";
  }
  .Post .header {
    width: 100%;
    grid-area: header;
  }
  .Post .header img{
    height: auto;
    max-height: theme('spacing.64')
  }
  .Post .content {
    @apply p-4 w-full max-w-screen-lg;
    grid-area: content;
  }
  .Post .sidebar {
    width: 300px;
    grid-area: sidebar;
  }

  @screen md {
    .Post {
      grid-template-areas: "header header" "content sidebar";
    }
  }
</style>

{#if post}
  <div class="Post">
    <div class="header col-sp">
      <img
        src={post.fields.featuredImage.fields.file.url}
        alt="{post.fields.featuredImage.fields.title}"
        class="w-full border-b-2 border-primary-500 p-4 object-cover" />
      <h1 class="text-xl font-display text-center p-4">{post.fields.title}</h1>
    </div>
    <div class="content">
      {@html html}
    </div>
    <div class="sidebar bg-primary-500" />
  </div>
{/if}
