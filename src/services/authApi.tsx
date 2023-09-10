import { createApi } from '@reduxjs/toolkit/query/react'
import fetchBase from './fetchBase'

export interface User {
  _id: string
  name: string
  lastname: string
  avatar: null | string
}

export interface LoginResponse {
  user: User
  token: string
}

export interface LoginRequest {
  email: string
  password: string
}

export interface RegisterResponse {

}

export const authApi = createApi({
  baseQuery: fetchBase,
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: 'auth/login',
        method: 'POST',
        body: credentials
      })
    }),
    registerUser: builder.mutation<RegisterResponse, FormData>({
      query(data) {
        return {
          url: 'auth/register',
          method: 'POST',
          body: { data },
          formData:true
        }
      }
    })
  })
})

export const { useLoginMutation, useRegisterUserMutation } = authApi
