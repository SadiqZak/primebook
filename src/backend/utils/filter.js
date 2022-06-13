export const filterData = (arr,type)=>{
    switch(type){
        case "Latest":{
            const dateObj = (obj)=>{return new Date(obj)}
            return arr.sort((a, b)=>dateObj(b.createdAt) - dateObj(a.createdAt))
        }
        case "Trending":{
            return arr.sort((a, b)=>parseFloat(b.likes.likeCount)-parseFloat(a.likes.likeCount))
        }
        default:{
            return arr
        }

    }
}