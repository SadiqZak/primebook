import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { editUserServices, loginService } from "../services/authService";
import { bookMarkService, removeBookMarkService } from "../services/userService";

export const authoriseUser = createAsyncThunk("authorisation/authoriseUser",async({username, password})=>{
    try{
        const response = await loginService({username, password})
    if(response.status === 200){
        // console.log(response.data)
        return response.data
    }
    }catch(err){
        console.error(err)
    }
})

export const editUserProfile = createAsyncThunk(
    "authorisation/editUserProfile",
    async ({ userData, encodedToken }) => {
      try {
        const response = await editUserServices({userData, encodedToken});
        return response.data.user;
      } catch (err) {
        console.error(err);
      }
    }
  );

  export const bookmarkPost = createAsyncThunk('authorisation/bookmarkPost', async({postId, encodedToken})=>{
    try{
        const response = await bookMarkService({postId, encodedToken})
        return response.data.bookmarks
    }catch(err){
        console.error(err)
    }
  })

  export const removeBookmark = createAsyncThunk('authorisation/removeBookmark', async({postId, encodedToken})=>{
    try{
      const response = await removeBookMarkService({postId, encodedToken})
      return response.data.bookmarks
    }catch(err){
      console.error(err)
  }
  })

const authSlice = createSlice({
    name:"authorisation",
    initialState:{
        token:JSON.parse(localStorage.getItem('login'))?.token,
        user:JSON.parse(localStorage.getItem('login'))?.user,
        isAuthenticated:false,
        currUserBookmark:[]
    },
    reducers:{
        logoutUser: (state) => {
            localStorage.removeItem('login');
            state.token = null;
            state.user = null;
          },
    },
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
        },
        [editUserProfile.fulfilled]:(state, action)=>{
            state.user = action.payload
        },
        [editUserProfile.rejected]:(action)=>{
            console.error(action.payload)
        },
        [bookmarkPost.fulfilled]:(state, action)=>{
            state.user.bookmarks = action.payload
        },
        [bookmarkPost.rejected]:(action)=>{
            console.error(action.payload)
        },
        [removeBookmark.fulfilled]:(state, action)=>{
            state.user.bookmarks = action.payload
        },
        [removeBookmark.rejected]:(action)=>{
          console.error(action.payload)
        }
    }
})

export default authSlice.reducer;
export const {logoutUser} = authSlice.actions;