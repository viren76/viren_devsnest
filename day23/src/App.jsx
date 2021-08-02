import './App.css';
import Card from './Components/Card';
import React,{ useState } from 'react';
function App() {

  const [state,setState]=useState(["Pizza","Burger","Maggi","Dosa","Vada Pav","Pasta"]);
  const [cal,setCal]=useState(["80","48","52","36","46","67"]);

/*   console.log(state);
  console.log(setState);
  console.log(cal); */

  return (
    <div className="App">
      {
        state.map((item,index)=>
        <Card food={item} key={index} calories={cal[index]} setState={setState} setCal={setCal} foodArr={state} calArr={cal} />
      )
      }
    </div>
  );
}

export default App;
