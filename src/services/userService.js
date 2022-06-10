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

  export const bookMarkService = async({postId, encodedToken})=>{
    return axios.post(`/api/users/bookmark/${postId}`, {}, {
        headers:{
            authorization: encodedToken
        }
    })
}

export const removeBookMarkService = async({postId, encodedToken})=>{
  return axios.post(`/api/users/remove-bookmark/${postId}`,{},{
    headers:{
      authorization:encodedToken
    }
  })
}