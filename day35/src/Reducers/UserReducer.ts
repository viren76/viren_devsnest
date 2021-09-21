export interface ActionType{
    type:"USER_DATA",
    payload:object[]
}

const UserReducer=(state:object={},action:ActionType)=>{
    switch(action.type){
        case "USER_DATA":
            return action.payload
        default:
            return state
    }
}
export default UserReducer;