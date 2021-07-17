import './App.css';
import Card from "./components/Card";
function App() {
  var arr=["Pizza","Burger","Maggi","Dosa","Vada Pav","Pasta"];
  var cal=["80","48","52","36","46","67"];
  return (
    <div className="App">
    {
        arr.map((item,index)=>
        <Card food={item} key={index} calories={cal[index]} />
      )
    }
    </div>
  );
}

export default App;
