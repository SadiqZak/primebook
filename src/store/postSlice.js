import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addCommentService, addPostService, bookMarkService, deletePostService, dislikePostService, editPostService, getAllPostsService, getCommentsService, likePostService } from "../services/postService";

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

export const likePost = createAsyncThunk('posts/likePost', async({postId, encodedToken})=>{
    // console.log(postId, encodedToken)
    try{
        const response = await likePostService({postId, encodedToken})
        if(response.status === 201){ //201 is a create status code //HTTP status code 
            // console.log(response.data.posts)
            return response.data.posts
        }
    }catch(err){
        console.error(err)
    }
})

export const dislikePost = createAsyncThunk('posts/dislikePost', async({postId, encodedToken})=>{
    try{
        const response = await dislikePostService({postId, encodedToken})
        return response.data.posts
    }catch(err){
        console.error(err)
    }
})

export const editPost = createAsyncThunk('posts/editPost',async({postData, postId, encodedToken})=>{
    try{
        const response = await editPostService({postId, postData, encodedToken})
        return response.data.posts
    }catch(err){
        console.error(err)
    }
})

export const deletePost = createAsyncThunk('posts/deletePost', async({postId, encodedToken})=>{
    try{
        const response = await deletePostService({postId, encodedToken})
        return response.data.posts
    }catch(err){
        console.error(err)
    }
})


const postsSlice = createSlice({
    name:"posts",
    initialState:{
        posts:[],
        sortSelectState:"Latest"
    },
    reducers:{
        changeSorting: (state, action) => {
            state.sortSelectState = action.payload;
          },
    },
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
        },
        [likePost.fulfilled]:(state, action)=>{
            // console.log(action.payload)
            state.posts = action.payload
        },
        [likePost.rejected]:(action)=>{
            console.error(action.payload)
        },
        [dislikePost.fulfilled]:(state, action)=>{
            console.log(action.payload)
            state.posts = action.payload
        },
        [dislikePost.rejected]: (action)=>{
            console.error(action.payload)
        },
        [editPost.fulfilled]:(state, action)=>{
            console.log(action.payload)
            state.posts = action.payload
        },
        [editPost.rejected]:(action)=>{
            console.error(action.payload)
        },
        [deletePost.fulfilled]:(state, action)=>{
            state.posts = action.payload
        },
        [deletePost.rejected]:(action)=>{
            console.error(action.payload)
        }, 
    }
})


export default postsSlice.reducer;
export const {changeSorting} = postsSlice.actions;