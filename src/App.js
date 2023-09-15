import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from "./components/ItemCount/ItemCount"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import {YEAR} from "./config/constants.js"


function App() {
    return (
      /* <div className="App"> */
        <BrowserRouter>
            <NavBar />
            <Banner />
            <Routes>
              <Route path="/" element = {<ItemDetailContainer />} />
              <Route path="/category/:categoryId" element = {<ItemDetailContainer />} />
              <Route path="/item/:itemId" element = {<ItemDetailContainer />} />
              <Route path="*"element = {<h1>404 NOT FOUND</h1>} /> 
            </Routes>
            <ItemListContainer greeting = {"Bienvenidos"} />
            <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log("Cantidad agregada ", quantity)}/>
            <footer>
              Creada por Joaquin Canudas Ribo {YEAR}
            </footer>
        </BrowserRouter>  
      /* </div>   */    
    );
}

export default App;


