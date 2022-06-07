import axios from "axios";

export const getAllPostsService = async()=>{
    return axios.get("/api/posts")
}

export const addPostService = async({postData, encodedToken})=>{
    return axios.post("/api/posts", {postData}, {
        headers:{
            authorization: encodedToken,
        }
    }) 
}

export const addCommentService = async({postId, commentData, encodedToken})=>{
     return axios.post(`/api/comments/add/${postId}`, {commentData}, {
        headers:{
            authorization: encodedToken,
        }
    })
}

export const getCommentsService = async({postId, encodedToken})=>{
    return axios.get(`/api/comments/${postId}`,{
        headers:{
            authorization:encodedToken,
        }
    })
}