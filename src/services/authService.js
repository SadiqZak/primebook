import axios from "axios";

export const loginService = async ({username, password}) =>{
    return axios.post('/api/auth/login', {
        username, password
    })
} 

export const editUserServices = ({userData, encodedToken})=>{
    return axios.post(
        '/api/users/edit',
        { userData },
        {
          headers: {
            authorization:encodedToken,
          },
        },)
}