import "./App.css";
import { useEffect } from "react";
import NavBar from './components/NavBar';
import Posts from "./components/Posts";
import { useDispatch } from "react-redux";
import { GetUser } from "./actions";

function App() {
  const dispatch = useDispatch();
 useEffect(() => {
  dispatch(GetUser())
 }, [dispatch])

  return (
    
      <div className= "App">
        <NavBar/>
        <Posts/>
      </div>
  );
}

export default App;
