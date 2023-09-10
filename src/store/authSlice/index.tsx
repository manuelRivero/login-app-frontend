import { createSlice } from '@reduxjs/toolkit'

interface User {
    data:{
        name:string;
        email:string;
        lastName:string;
        avatar?:string;
    }
    
}

export interface State {
    user: null | User,
    token: string;
}
const userDataString = localStorage.getItem('user')
const userData = userDataString !== null ? JSON.parse(userDataString) : null

const initialState = {
  token: userData?.token || null,
  user: userData?.user || null
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