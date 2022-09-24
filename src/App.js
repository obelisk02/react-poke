import Navbar from "./components/Navbar";
import About from "./components/About";
import N404 from "./components/n404";


import Axios from "axios";

import {Route, Routes} from "react-router-dom"
import { useEffect , useState} from "react";
import Card from "./components/Card";

function App() {

  let page = Math.floor((Math.random() * 18) + 1 )*10;
  const baseURL = "https://pokeapi.co/api/v2/pokemon/?limit=10&offset=" + page;

  const [fetch, setFetch] = useState([]);

  const apiFetch = (baseURL) => {
    Axios.get(baseURL)
    .then((response) => {
      console.log(response.data.results);
      setFetch(response.data.results);

    })
    .catch(error => {
      console.log(error);
    })
  }


  useEffect(() => {
    apiFetch(baseURL)
  }, []);

 

  return (
   <><Navbar brand="API React"></Navbar>
    
    
   
      <Routes>
        <Route path="/" element={<Card pokes={fetch}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/404" element={< N404 />} />
      </Routes>
    
    
    </>
   
  );
}

export default App;
