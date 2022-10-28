import "./App.css";
import {Header} from "./components/header.js";
import {Footer} from "./components/footer.js";
//import {Perfil} from "./components/vistaPerfil"; <ComponentePerfil />
import {ListaProductos} from './components/vistaListaProductos';

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        
        <ListaProductos />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
