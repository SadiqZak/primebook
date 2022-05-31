const reducerFunc = (state, action)=>{
    switch(action.type){
        case "InitialState":{
            return{
                ...state,
                sidebarState:"Home"
            }
        }
        case "Home":{
            return{
                ...state,
                sidebarState: action.type
            }

        }
        case "Explore":{
            return{
                ...state,
                sidebarState: action.type
            }

        }
        case "Liked Posts":{
            return{
                ...state,
                sidebarState: action.type
            }

        }
        case "Bookmarks":{
            return{
                ...state,
                sidebarState: action.type
            }

        }
        default:
            return state;
    }
}

export default reducerFunc;