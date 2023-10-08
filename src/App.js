import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import Cart from "./components/Cart/Cart"
import CartProvider from "./context/CartProvider";
import Checkout from "./services/firebase/checkout"
import ErrorPage from './pages/ErrorPage/ErrorPage';



function App() {
    return (

        <BrowserRouter>
            <CartProvider>
                <NavBar />
                <Routes>
                    <Route path="/" element = {<ItemListContainer />} />
                    <Route path="/products" element={<ItemListContainer />} />
                    <Route path="/category/:categoryId" element = {<ItemListContainer />} />
                    <Route path="/item/:itemId" element = {<ItemDetailContainer />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </CartProvider>
        </BrowserRouter>     
    );
}

export default App;


