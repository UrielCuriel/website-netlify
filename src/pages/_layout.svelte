<script lang="ts">
  import Nav from "../components/Nav.svelte"
  import Footer from "../components/Footer.svelte"
</script>

<Nav>
  <main class="min-h-page overflow-x-hidden">
    <slot />
  </main>
</Nav>
<Footer />
