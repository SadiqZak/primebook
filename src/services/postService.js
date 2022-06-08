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

export const likePostService = async({postId, encodedToken})=>{
    // console.log(postId, encodedToken)
    return axios.post(`/api/posts/like/${postId}`,{}, {
        headers:{
            authorization: encodedToken,
        }
    })
}

export const dislikePostService = async({postId, encodedToken})=>{
    return axios.post(`/api/posts/dislike/${postId}`,{}, {
        headers:{
            authorization: encodedToken,
        }
    })
}

export const editPostService = async({postId, encodedToken, postData})=>{
    return axios.post(`/api/posts/edit/${postId}`,{postData},{
        headers:{
            authorization:encodedToken
        }
    })
}

export const deletePostService = async({postId, encodedToken})=>{
    return axios.delete(`/api/posts/${postId}`,{
        headers:{
            authorization: encodedToken
        }
    })
}