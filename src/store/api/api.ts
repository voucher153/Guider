import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_URL = 'https://jsonplaceholder.typicode.com/posts'

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL
    }),
    endpoints: builder => ({
        getService: builder.query({
            query: (id = 1) => `/${id}`
        })
    })
})

export const { useGetServiceQuery } = api