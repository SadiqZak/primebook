import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addCommentService, addPostService, getAllPostsService, getCommentsService } from "../services/postService";

export const getAllPosts = createAsyncThunk("posts/getAllPosts", async()=>{
    try{
        const response = await getAllPostsService()
        if(response.status === 200){
            return response.data.posts
        }
    }catch(err){
        console.error(err)
    }
})

export const addPostToFeed = createAsyncThunk("posts/addPostToFeed", async({postData, encodedToken})=>{ //type
    try{
        const response = await addPostService({postData, encodedToken})
        if(response.status === 201){ //201 is a create status code //HTTP status code 
            return response.data.posts
        }
    }catch(err){
        console.error(err)
    }
})

export const addComment = createAsyncThunk("posts/addComment", async({postId, commentData, encodedToken})=>{
    try{
        const response = await addCommentService({postId, commentData, encodedToken})
        console.log(response)
            return response.data.posts
    }catch(err){
         console.error(err)   
    } 
})

export const getComment = createAsyncThunk('posts/getComment',async({postId, encodedToken})=>{
    try{
        const response = await getCommentsService({postId, encodedToken})
        return response.data.posts
    }catch(err){
        console.error(err)
    }
})

const posts = createSlice({
    name:"posts",
    initialState:{
        posts:[]
    },
    reducer:{},
    extraReducers:{
        [getAllPosts.fulfilled]:(state,action)=>{
            state.posts = action.payload
        },
        [getAllPosts.rejected]:(action)=>{
            console.error(action.payload)
        },
        [addPostToFeed.fulfilled]: (state, action)=>{
            state.posts = action.payload
        }, 
        [addPostToFeed.rejected]: (action)=>{
            console.error(action.payload)
        },
        [addComment.fulfilled]:(state, action)=>{
            console.log(action.payload)
            state.posts = action.payload
        },
        [addComment.rejected]:(action)=>{
            console.error(action.payload)
        },
        [getComment.fulfilled]:(state,action)=>{
            state.posts = action.payload
        },
        [getComment.rejected]:(action)=>{
            console.error(action.payload)
        }
    }
})


export default posts.reducer