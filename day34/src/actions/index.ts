const AddNote=(note:string)=>{
    return {
        type:"ADD_NOTE",
        payload:note,
    }
}

const DelNote=(id:number)=>{
    return {
        type:"DEL_NOTE",
        payload:id,
    }
}

export {AddNote,DelNote};