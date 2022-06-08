import axios from "axios"

export const getUserPostsService = async({userId, encodedToken})=>{
    return axios.get(`/api/users/${userId}`,{
        headers:{
            authorization: encodedToken,
        }
    })
}

export const getUserProfileService = async({encodedToken})=>{
    return axios.get(`/api/users`, {
        headers:{
            authorization:encodedToken
        }
    })
}