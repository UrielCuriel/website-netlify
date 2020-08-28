<script lang="ts">
  import { Router } from "@sveltech/routify"
  import { routes } from "../.routify/routes"
  import { parse, stringify } from "qs"
  import { get } from "svelte/store"
  import { locale } from "./api/cms"
  const queryHandler = {
    parse: (params) => {
      const query = parse(params, { ignoreQueryPrefix: true })

      return { ...query, locale: query.locale ?? "es-MX" }
    },
    stringify: (params) => stringify({ ...params }, { addQueryPrefix: true }),
  }
</script>

<style global>
  @import "../static/global.css";
</style>

<Router {routes} config={{ queryHandler }} />
