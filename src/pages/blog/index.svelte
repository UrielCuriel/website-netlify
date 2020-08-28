<script lang="ts">
  import { params, isActive } from "@sveltech/routify"
</script>

{#if $isActive('/blog')}
  <div class="w-screen h-screen flex justify-center items-center">
    <h1 class="text-3xl text-primary-500 text-center">
      Pronto encontrarás Publicaciones de tu interés
    </h1>

  </div>
{/if}
