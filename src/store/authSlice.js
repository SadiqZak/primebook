import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginService } from "../services/authService";

export const authoriseUser = createAsyncThunk("authorisation/authoriseUser",async({username, password})=>{
    try{
        const response = await loginService({email, password})
    if(response.status === 200){
        return response.data
    }
    }catch(err){
        console.error(err)
    }
})

const authSlice = createSlice({
    name:"authorisation",
    initialState:{
        token:"",
        isAuthenticated:false
    },
    reducer:{}
})