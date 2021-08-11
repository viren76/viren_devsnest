import './App.css';
 interface user{
    name:string,
    age:number;

  }
function App() {
const users:user={
 name:"Viren",
 age:22,
}
 
  return (
    <div>
      <h1>{users.name}</h1>
      <h3>{users.age}</h3>
      
    </div>
  );
}

export default App;
