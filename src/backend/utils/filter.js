export const filterData = (arr,type)=>{
    switch(type){
        case "Latest":{
            const dateObj = (obj)=>{return new Date(obj)}
            return arr.sort((a, b)=>dateObj(b.createdAt) - dateObj(a.createdAt))
        }
        default:{
            return arr
        }

    }
}