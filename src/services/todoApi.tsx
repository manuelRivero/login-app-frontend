import { createApi } from '@reduxjs/toolkit/query/react'
import fetchBase from './fetchBase'




export const postsApi = createApi({
  reducerPath: 'postsApi',
  tagTypes: ['posts'],
  baseQuery: fetchBase,
  endpoints: (builder) => ({
    getPosts: builder.query<any, any>({
      query(args) {
        return {
          url: `/posts?page=${args.page}`
        }
      }
    })
  })
})

export const { useGetPostsQuery } = postsApi
