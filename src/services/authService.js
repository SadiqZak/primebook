import axios from "axios";

export const loginService = async ({username, password}) =>{
    return axios.post('/api/auth/login', {
        username, password
    })
} 