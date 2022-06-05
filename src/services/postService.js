import axios from "axios";

export const getAllPostsService = async()=>{
    return axios.get("/api/posts")
}

export const addPostService = async({postData, token})=>{
    return axios.post("/api/posts", {postData}, {
        headers:{
            authorization: token
        }
    }) 
}
