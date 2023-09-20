import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"



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


