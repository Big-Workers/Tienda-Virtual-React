import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "./components/header.js";
import { Footer } from "./components/footer.js";

import { Formulariologin } from "./components/login.js";




//  importacion Registrarse <----------
import { Registro } from "./components/registro.js";
import { Perfil } from "./components/vistaPerfil.js";
import { EditarPerfil } from "./components/vistaEditarPerfil.js";
//  importacion editar perfil <----------

import { ListaProductos } from "./components/vistaListaProductos.js";
//  importacion carrito de compras <----------
import { PasarelaPagos } from './components/pasarelaPagos.js';


// importacion pago aprobado
// importacion pago rechazado


import {ProductosAdmin} from './components/productosAdmin.js';
import {AgregarProducto} from './components/agregarProducto.js';
// importacion ventas



// importacion creditos

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Formulariologin />} />
          <Route path="/Registrarse" element={<>
          <Registro />
          </>} />
          <Route
            path="/Perfil"
            element={
              <>
                <Header />
                <Perfil />
                <Footer />
              </>
            }
          />
          <Route path="/Editar-Perfil" element={<>
            <Header />
            <EditarPerfil />
            <Footer />
          </>} />
          <Route
            path="/Productos"
            element={
              <>
                <Header />
                <ListaProductos />
                <Footer />
              </>
            }
          />
          <Route path="/Carrito" element={<h1>Vista Carrito de compras</h1>} />
          <Route path="/Pasarela" element={<>
            <Header />
            <PasarelaPagos />
            <Footer />
          </>} />

          <Route path="/Aprobado" element={<h1>Vista Pago Aprobado</h1>} />
          <Route path="/Rechazado" element={<h1>Vista Pago Rechazado</h1>} />

          <Route
            path="/Admin-Productos"
            element={<>
              <Header />
              <ProductosAdmin />
              <Footer />
            </>}
          />
          <Route
            path="/Admin-Nuevo-Producto"
            element={<>
              <Header />
              <AgregarProducto/>
              <Footer />
            </>}
          />
          <Route path="/Admin-Ventas" element={<h1>Vista Ventas</h1>} />

          <Route path="/about" element={<h1>Vista Creditos</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
