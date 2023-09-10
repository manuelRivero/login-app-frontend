import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError
} from '@reduxjs/toolkit/query'

import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import { logOut } from '../../features/auth/authSlice'
import { type RootState } from '../store'

const baseUrl = `${process.env.REACT_APP_API_URL}`

const baseQuery = fetchBaseQuery({
  baseUrl,
  credentials: 'same-origin',
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token
    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }
    return headers
  }
})

const fetchBase: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions)
  console.log(result)
  if (
    result.error != null &&
    (result.error.status === 401 || result.error.status === 500)
  ) {
    api.dispatch(logOut())
  }
  return result
}
export default fetchBase
