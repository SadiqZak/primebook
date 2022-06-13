import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./postSlice";
import authReducer from './authSlice';
import profileReducer from './profileSlice';
import userReducer from './userSlice';

export const store = configureStore({
    reducer:{
        authenticate: authReducer,
        timeline:postReducer,
        profile: profileReducer,
        users: userReducer,
    }
});