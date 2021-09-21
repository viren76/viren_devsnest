interface AddType{
    type:"ADD_NOTE",
    payload:string,
}

interface DelType{
    type:"DEL_NOTE",
    payload:number,
}

export type ActionType = AddType | DelType


const NoteReducer=(state:string[]=[],action:ActionType)=>{
    switch(action.type){
        case 'ADD_NOTE':
            return[...state,action.payload]
        case 'DEL_NOTE':
            return state.filter((_,index)=>index!==action.payload)
        default:
            return state
    }

}

export default NoteReducer;