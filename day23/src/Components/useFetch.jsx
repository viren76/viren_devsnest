import { useEffect, useState } from 'react';

export const useFetch=(url)=>{
    const [value,setValue]=useState([]);

    let fetchdata=()=>{
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        setValue(data.message);
    })
    }   


useEffect(()=>{
    fetchdata();
},[]);

return [value];
}
