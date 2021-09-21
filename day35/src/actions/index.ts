const GetUser=()=>{
    return(dispatch:any)=>{
        fetch('https://pixabay.com/api/?key=22914246-c5bc5069dc81a2d16ae551e13&q=yellow+flowers&image_type=photo&pretty=true')
        .then(res=>res.json())
        .then(data=>{
                dispatch({
                        type:"USER_DATA",
                        payload:data
                })
            })
    }
}

export {GetUser};