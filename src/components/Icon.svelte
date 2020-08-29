<script lang="ts">
  import type { IconDefinition } from "@fortawesome/fontawesome-svg-core"
  export let icon: IconDefinition
  let path: string = ""
  let classes = ""
  let viewBox = ""
  $: viewBox = `0 0 ${icon?.icon[0] || 0} ${icon?.icon[1] || 0}`
  $: classes =
    " h-4 w-4 inline-block overflow-visible " +
    ($$props.class ? $$props.class : "")
  $: path = icon?.icon[4] as string
</script>

<svg
  aria-hidden="true"
  class={classes}
  role="img"
  xmlns="http://www.w3.org/2000/svg"
  {viewBox}>
  <path fill="currentColor" d={path} />
</svg>
