import axios from "axios";

export const loginService = async ({username, password}) =>{
    return axios.post('/api/auth/login', {
        username, password
    })
} 

export const signupUserService = async({username, password, firstName, lastName})=>{
  return axios.post('/api/auth/signup', {
    username, password, firstName, lastName
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