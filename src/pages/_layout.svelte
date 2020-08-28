<script lang="ts">
  import Nav from "../components/Nav.svelte"
  import Footer from "../components/Footer.svelte"
  import Landing from "../components/Landing.svelte"
  import Loading from "../components/Loading.svelte"
  import { afterPageLoad, params } from "@sveltech/routify"
  import { onMount } from "svelte"
  import { getLocales, locale, locales } from "../api/cms"
  let show = false
  $afterPageLoad((page) => {
    show = ["index", "work", "about", "skills"].includes(page.title)
  })
  onMount(async () => {
    await getLocales()
  })
</script>

<Nav>
  <main class="min-h-page overflow-x-hidden">
    <slot />
  </main>
</Nav>
<Footer />
