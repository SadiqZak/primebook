import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { editUserServices, loginService } from "../services/authService";

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

const authSlice = createSlice({
    name:"authorisation",
    initialState:{
        token:JSON.parse(localStorage.getItem('login'))?.token,
        user:JSON.parse(localStorage.getItem('login'))?.user,
        isAuthenticated:false
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
        }
    }
})

export default authSlice.reducer;
export const {logoutUser} = authSlice.actions;