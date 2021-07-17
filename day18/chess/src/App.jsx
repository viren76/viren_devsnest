import './App.css';
import Card from "./components/Card";

function App({items}) {
  var array1=[];
  for(let i=0;i<items;i++){
    array1[i]=i;
  }
  
 return(
   <div className="App">
     {
        
        array1.map((item,index) => 
        (index % 2 === 0)?
          item=<Card key={index} bg="white" />:
          item=<Card key={index} bg="black" />
        )
       
     }
   </div> 
 )
}

export default App;
