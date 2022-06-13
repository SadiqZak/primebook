import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getAllUserService } from "../services/userService";

export const getAllUsers = createAsyncThunk(`profile/getUsers`, async()=>{
    try{
        const response = await getAllUserService()
        return response.data.users;
    }catch(err){
        console.log(err)
    }
})

export const userSlice = createSlice({
    name:"users",
    initialState:{
        users:[]
    },
    reducers:{},
    extraReducers:{
        [getAllUsers.fulfilled]:(state, action)=>{
            state.users = action.payload
        },
        [getAllUsers.rejected]:(action)=>{
            console.log(action.payload)
        }
    }
})

export default userSlice.reducer