import { params } from "@sveltech/routify"
import { derived } from "svelte/store"
import { queryProfile } from "../api/queries"
import type { Author } from "../types/types"

export const profile = derived(
  params,
  async ($params: { locale: string }) =>
    await fetch(
      "https://graphql.contentful.com/content/v1/spaces/z2zerwqbgp83?access_token=c8mJZPX9JYslaSSJYhLlddBzA-RKPQuS5l_kh2XFjng",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          query: queryProfile({
            locale: $params.locale,
            id: "5VscPTD6HNFqzwdwRHRsDX",
          }),
        }),
      },
    )
      .then((r) => r.json())
      .then((data) => data.data.author as Author),
)
