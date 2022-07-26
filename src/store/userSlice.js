import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllUserService, followUserServices, unfollowUserServices } from "../services/userService";
import { editUserProfile } from "./authSlice";

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
  async ({ followUserId, encodedToken, dispatch }) => {
    try {
      const response = await followUserServices({followUserId, encodedToken});
      dispatch(editUserProfile({userData:response.data.user, encodedToken:encodedToken}))
      return response.data;
    } catch (err) {
      console.error(err);
    }
  }
);

export const unfollowUser = createAsyncThunk(
  "users/unfollowUser",
  async ({followUserId, encodedToken, dispatch}) =>{
    try{
      const response = await unfollowUserServices({followUserId, encodedToken})
      dispatch(editUserProfile({userData:response.data.user, encodedToken:encodedToken}))
      return response.data
    }catch(err){
      console.error(err)
    }
  }

)
export const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    currentUser: "",
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
      console.error(action.payload);
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
    [unfollowUser.fulfilled]: (state,action)=>{
      state.users = state.users.map((user) =>
        action.payload.followUser.username === user.username ? action.payload.followUser : user,
      );
      state.users = [...state.users].map((user) =>
        action.payload.user.username === user.username ? action.payload.user : user,
      );
     
    },
    [unfollowUser.rejected]: (action)=>{
      console.error(action.payload)
    }
  },
});

export default userSlice.reducer;
export const { updateCurrUser } = userSlice.actions;
