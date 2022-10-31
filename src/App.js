import { Home } from "./components/home.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "./components/header.js";
import { Footer } from "./components/footer.js";

import { Formulariologin } from "./components/login.js";

import { Registro } from "./components/registro.js";

import { Perfil } from "./components/vistaPerfil.js";
import { EditarPerfil } from "./components/vistaEditarPerfil.js";

import { ListaProductos } from "./components/vistaListaProductos.js";
import { CarritoCompras } from "./components/carrito.js";
import { PasarelaPagos } from "./components/pasarelaPagos.js";

import { Aprobado } from "./components/aprobado.js";
import { Rechazado } from "./components/rechazado.js";

import { ProductosAdmin } from "./components/productosAdmin.js";
import { AgregarProducto } from "./components/agregarProducto.js";
import { Ventas } from "./components/ventas.js";



// importacion creditos

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/Home"
            element={
              <>
                <Header />
                <Home />
                <Footer />
              </>
            }
          />
          <Route path="/" element={<Formulariologin />} />
          <Route path="/Registrarse" element={<Registro />} />
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
          <Route
            path="/Editar-Perfil"
            element={
              <>
                <Header />
                <EditarPerfil />
                <Footer />
              </>
            }
          />
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
          <Route
            path="/Carrito"
            element={
              <>
                <Header />
                <CarritoCompras />
                <Footer />
              </>
            }
          />
          <Route
            path="/Pasarela"
            element={
              <>
                <Header />
                <PasarelaPagos />
                <Footer />
              </>
            }
          />

          <Route
            path="/Aprobado"
            element={
              <>
                <Header />
                <Aprobado />
                <Footer />
              </>
            }
          />
          <Route
            path="/Rechazado"
            element={
              <>
                <Header />
                <Rechazado />
                <Footer />
              </>
            }
          />

          <Route
            path="/Admin-Productos"
            element={
              <>
                <Header />
                <ProductosAdmin />
                <Footer />
              </>
            }
          />
          <Route
            path="/Admin-Nuevo-Producto"
            element={
              <>
                <Header />
                <AgregarProducto />
                <Footer />
              </>
            }
          />
          <Route
            path="/Admin-Ventas"
            element={
              <>
                <Header />
                <Ventas />
                <Footer />
              </>
            }
          />

          <Route path="/about" element={<h1>Team Big Workers</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
