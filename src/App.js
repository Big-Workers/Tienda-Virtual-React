import {Header} from './components/header.js';
import {Footer} from './components/footer.js';
//import ComponentePerfil from './components/vistaPerfil.js';
import ProductosAdmin from './components/productosAdmin.js';

function App() {
  return (
    <>
    <header>
      <Header/>
    </header>
    <main>
      <ProductosAdmin/>
    </main>
    <footer>
      <Footer/>
    </footer>
    </>
  );
}

export default App;