import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError
} from '@reduxjs/toolkit/query'

import { fetchBaseQuery } from '@reduxjs/toolkit/query'

import { type RootState } from '../store'
import { logout } from '../store/authSlice'

const baseUrl = `${process.env.REACT_APP_API_URL}`

const baseQuery = fetchBaseQuery({
  baseUrl,
  credentials: 'same-origin',
  prepareHeaders: (headers, { getState }) => {
    const authState = (getState() as RootState).auth
    if(authState.token){
      headers.set('authorization', `Bearer ${authState.token}`)
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
    api.dispatch(logout())
  }
  return result
}
export default fetchBase
