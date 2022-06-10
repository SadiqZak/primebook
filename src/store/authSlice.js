import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginService } from "../services/authService";

export const authoriseUser = createAsyncThunk("authorisation/authoriseUser",async({username, password})=>{
    try{
        const response = await loginService({username, password})
    if(response.status === 200){
        console.log(response.data)
        return response.data
    }
    }catch(err){
        console.error(err)
    }
})

const authSlice = createSlice({
    name:"authorisation",
    initialState:{
        token:JSON.parse(localStorage.getItem('login'))?.token,
        user:JSON.parse(localStorage.getItem('login'))?.user,
        isAuthenticated:false
    },
    reducer:{},
    extraReducers:{
        [authoriseUser.fulfilled]:(state, action)=>{
            state.token=action.payload.encodedToken;
            state.user = action.payload.foundUser;
            state.isAuthenticated = true
            localStorage.setItem('login',
            JSON.stringify({
                token: action.payload.encodedToken,
                user: action.payload.foundUser,
            }))
        },
        [authoriseUser.rejected]:(state, action)=>{
            state.isAuthenticated = false
            console.error(action.payload)
        }
    }
})

export default authSlice.reducer