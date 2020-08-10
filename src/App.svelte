<script lang="ts">
  import { Router } from "@sveltech/routify"
  import { routes } from "../.routify/routes"
  import { parse, stringify } from "qs"
  const queryHandler = {
    parse: (params) => parse(params, { ignoreQueryPrefix: true }),
    stringify: (params) => stringify(params, { addQueryPrefix: true }),
  }
</script>

<style global>
  @import "../static/global.css";
</style>

<Router {routes} config={{ queryHandler }} />
