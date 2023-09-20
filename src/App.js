import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar";
/* import Banner from "./components/Banner/Banner" */
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from "./components/ItemCount/ItemCount"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import {YEAR} from "./config/constants.js"


function App() {
    return (

        <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element = {<ItemDetailContainer />} />
              <Route path="/category/:categoryId" element = {<ItemDetailContainer />} />
              <Route path="/item/:itemId" element = {<ItemDetailContainer />} />
              <Route path="*"element = {<h1>404 NOT FOUND</h1>} /> 
            </Routes>
        </BrowserRouter>     
    );
}

export default App;


