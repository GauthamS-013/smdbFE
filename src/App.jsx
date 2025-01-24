import { useState } from "react";
import "./App.css";
import Add from "./components/Add";
import List from "./components/List";

function App() {
  const [count, setCount] = useState(0);
  const [success,setSuccess]=useState("")

  return (
    <>
      <nav className="navbar navbar-expand navbar-light bg-danger" style={{minWidth:'100vh'}}>
        <a className="navbar-brand ms-4" href="">
          {' '}
        <i className="fa-solid fa-film text-light me-2"></i>
         <b className="text-light"> MOVIE WATCHLIST</b>
        </a>
      </nav>

      <div className="container-fluid" style={{backgroundColor:'#e6dda3',minWidth:'100vh'}}>
        <Add val={setSuccess}/>
        <List success={success}/>
      </div>
    </>
  );
}

export default App;
