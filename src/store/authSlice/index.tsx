import { createSlice } from '@reduxjs/toolkit'

interface User {
    data?:{
        name:string;
        email:string;
        lastName:string;
    }
    tokens: {
        access:string;
        refresh:string
    }
}

export interface State {
    user: null | User
}
const initialState = {
  user:null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state:State) => {

    }
  },
})

// Action creators are generated for each case reducer function
export const {logout } = authSlice.actions

export default authSlice.reducer