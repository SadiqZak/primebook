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
