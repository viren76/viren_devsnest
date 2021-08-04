import './App.css';
import React from 'react';
import {useFetch} from './Components/useFetch';
import {useState} from 'react';
function App() {
  const [data]=useFetch(`https://dog.ceo/api/breeds/image/random`)
  const [show,setShow]=useState(true);
  return(
      <div className="container">
        <img className="imgs" src={data} alt="" style={{visibility:show?'visible':'hidden'}}/><br/>
        <button onClick={()=>{
            setShow(!show);
        }}>{show?"Hide":"Show"}</button>
        
      </div>
    )
}
export default App;
