import './App.css';
import NavBar from './components/NavBar/NavBar';
import Banner from "./components/Banner/Banner"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {YEAR} from "./config/constants.js"

function App() {
    return (
      <div className="App">
          <header>
            <NavBar />
          </header>
          <div>
            <Banner />
          </div>
          <ItemListContainer greeting = {"Bienvenidos"} />
          <footer>
            Creada por Joaquin Canudas Ribo {YEAR}
          </footer>
      </div>
    );
}

export default App;
