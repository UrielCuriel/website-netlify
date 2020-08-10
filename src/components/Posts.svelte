<script lang="ts">
    import Post from "./Post.svelte";
    export let posts = [] 
    export let mode = 'card'
</script>
<style lang="postcss">
    .posts{
        grid-template-columns: repeat(auto-fill,minmax(theme('spacing.64'),1fr));
        justify-items: center;
    }
    
</style>
<div class="grid posts container col-gap-3 row-gap-3 my-3">
    {#each posts as post (post.slug)}
        <Post {post} {mode}/>
    {/each}
</div>