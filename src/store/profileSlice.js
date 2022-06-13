import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getUserPostsService, getUserProfileService } from "../services/userService"

export const getUserProfile = createAsyncThunk('profile/getUserProfile',async(username)=>{
    try{
        const response = await getUserProfileService(username)
        return response.data.user
    }catch(err){
        console.error(err)
    }
})

export const getUserPosts = createAsyncThunk("profile/getUserPosts", async({username})=>{
    try{
        const response = await getUserPostsService({username})
        return response.data.posts
    }catch(err){
        console.error(err)
    }
})

export const profileSlice = createSlice({
    name:"profile",
    initialState:{
        userPosts:[],
        userProfile:{}
    },
    reducers:{},
    extraReducers:{
        [getUserPosts.fulfilled]:(state, action)=>{
            state.userPosts=action.payload
        },
        [getUserPosts.rejected]:(action)=>{
            console.log(action.payload)
        },
        [getUserProfile.fulfilled]:(state, action)=>{
            state.userProfile =action.payload
        },
        [getUserProfile.rejected]:( action)=>{ 
            console.log(action.payload)
        },
    }
})

export default profileSlice.reducer