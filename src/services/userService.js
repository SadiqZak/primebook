import axios from "axios"

export const getUserPostsService = async({username})=>{
    return axios.get(`/api/posts/user/${username}`)
}

export const getUserProfileService = async({username})=>{
    return axios.get(`/api/users/${username}`)
}

export const getAllUserService = async()=>{
    return axios.get(`/api/users`)
}

export const followUserServices = async({followUserId, encodedToken}) =>
  axios.post(
    `/api/users/follow/${followUserId}`,
    {},
    {
      headers: {
        authorization: encodedToken,
      },
    },
  );