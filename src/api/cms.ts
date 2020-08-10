import { createClient } from "contentful"
import type {
  IBlogPost,
  IBlogPostFields,
  IAuthorFields,
  IProjectFields,
  IServiceFields,
  IService,
  IProject,
} from "../types/contentful"
declare const __website
const client = createClient({
  space: __website.env.SPACE,
  accessToken: __website.env.ACCESSTOKEN,
})
type queryOptions = {
  order?: string
  limit?: number
  skip?: number
}
export const getPosts = ({ order, limit, skip }: queryOptions = {}) =>
  client.getEntries<IBlogPost>({
    content_type: "blogPost",
    order,
    limit,
    skip,
  })
export const getServices = ({ order, limit, skip }: queryOptions = {}) =>
  client
    .getEntries<IServiceFields>({
      content_type: "service",
      order,
      limit,
      skip,
    })
    .then((res) => res.items as IService[])
export const getProjects = ({ order, limit, skip }: queryOptions = {}) =>
  client
    .getEntries<IProjectFields>({
      content_type: "project",
      order,
      limit,
      skip,
    })
    .then((res) => res.items as IProject[])

export const getProfile = () =>
  client.getEntry<IAuthorFields>("5VscPTD6HNFqzwdwRHRsDX")
export const getSocialMedia = () =>
  client.getEntry<IAuthorFields>("5VscPTD6HNFqzwdwRHRsDX", {
    content_type: "author",
    select: "sys,fields.socialMedia",
  })
export const getProfilePic = () =>
  client.getEntry<IAuthorFields>("5VscPTD6HNFqzwdwRHRsDX", {
    content_type: "author",
    select: "sys,fields.profilePic",
  })

export const getPostBySlug = (slug: string): Promise<IBlogPost> =>
  client
    .getEntries<IBlogPostFields>({
      content_type: "blogPost",
      "fields.slug[in]": slug,
    })
    .then((res) => res.items[0] as IBlogPost)

export const getPostByTags = (tags: string[]) =>
  client
    .getEntries<IBlogPost>({
      content_type: "blogPost",
      "fields.tags.sys.id[all]": tags.toString(),
    })
    .then((res) => res.items)
export function getEntryById<T>(id) {
  return client.getEntry<T>(id)
}
export function getEntriesById<T>(content_type, ids) {
  return client.getEntries<T>({
    content_type: content_type,
    "sys.id[all]": ids.toString(),
  })
}
export const getProjectsByService = (id) =>
  client.getEntries<IProjectFields>({
    // content_type: "project",
    links_to_entry: id,
  })
