import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getUserPostsService, getUserProfileService } from "../services/userService"

export const getUserProfiles = createAsyncThunk('profile/getUserProfiles',async({encodedToken})=>{
    try{
        const response = await getUserProfileService({encodedToken})
        return response.data.users
    }catch(err){
        console.error(err)
    }
})

export const getUserPosts = createAsyncThunk("profile/getUserPosts", async({userId, encodedToken})=>{
    try{
        const response = await getUserPostsService({userId, encodedToken})
        return response.data.posts
    }catch(err){
        console.error(err)
    }
})

export const profileSlice = createSlice({
    name:"profile",
    initialState:{
        posts:[],
        userProfile:[]
    },
    reducers:{},
    extraReducers:{
        [getUserPosts.fulfilled]:(state, action)=>{
            console.log(action.payload)
            state.posts=action.payload
        },
        [getUserPosts.rejected]:(action)=>{
            console.log(action.payload)
        },
        [getUserProfiles.fulfilled]:(state, action)=>{
            state.userProfile =action.payload
        },
        [getUserProfiles.rejected]:( action)=>{
            console.log(action.payload)
        },
    }
})

export default profileSlice.reducer