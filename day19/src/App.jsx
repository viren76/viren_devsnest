import './App.css';
import Button from './Components/Button';
function App() {
  var arr=[1,2,3,4];
  return (
    
    <div className="App">
      
      <h2>4 counter components</h2>
      {
      arr.map(item =>

        <Button key={item}/>
      )
      } 
    </div>
  );
}

export default App;
