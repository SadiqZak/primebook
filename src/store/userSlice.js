import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllUserService, followUserServices, bookMarkService, removeBookMarkService } from "../services/userService";

export const getAllUsers = createAsyncThunk(`profile/getUsers`, async () => {
  try {
    const response = await getAllUserService();
    return response.data.users;
  } catch (err) {
    console.log(err);
  }
});

export const followUser = createAsyncThunk(
  "users/followUser",
  async ({ followUserId, encodedToken }) => {
    try {
      const response = await followUserServices({followUserId, encodedToken});
      return response.data;
    } catch (err) {
      console.error(err);
    }
  }
);

export const bookmarkPost = createAsyncThunk('posts/bookmarkPost', async({postId, encodedToken})=>{
  try{
      const response = await bookMarkService({postId, encodedToken})
      return response.data.bookmarks
  }catch(err){
      console.error(err)
  }
})

export const removeBookmark = createAsyncThunk('posts/removeBookmark', async({postId, encodedToken})=>{
  try{
    const response = await removeBookMarkService({postId, encodedToken})
    return response.data.bookmarks
  }catch(err){
    console.error(err)
}
})

export const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    currentUser: "",
    currUserBookmark:[]
  },
  reducers: {
    updateCurrUser: (state, action) => {
      state.currentUser = action.payload;
  
    },
  },
  extraReducers: {
    [getAllUsers.fulfilled]: (state, action) => {
      state.users = action.payload;
    },
    [getAllUsers.rejected]: (action) => {
      console.log(action.payload);
    },
    [followUser.fulfilled]: (state, action) => {
      state.users = [...state.users].map((user) =>
        action.payload.followUser.username === user.username
          ? action.payload.followUser
          : user
      );
      state.users = [...state.users].map((user) =>
        action.payload.user.username === user.username ? action.payload.user : user,
      );

    },
    [followUser.rejected]: (action) => {
      console.error(action);
    },
    [bookmarkPost.fulfilled]:(state, action)=>{
      state.currUserBookmark = [...state.users].filter((user)=>
        action.payload[0].username === user.username
      )
      state.currUserBookmark[0].bookmarks = action.payload
  },
  [bookmarkPost.rejected]:(action)=>{
      console.log(action.payload)
  }
  },
  [removeBookmark.fulfilled]:(state, action)=>{
    state.currUserBookmark = [...state.users].filter((user)=>
    action.payload[0].username === user.username
  )
  state.currUserBookmark[0].bookmarks = action.payload
  },
  [removeBookmark.rejected]:(action)=>{
    console.log(action.payload)
  }
});

export default userSlice.reducer;
export const { updateCurrUser } = userSlice.actions;
