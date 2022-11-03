import { Home } from "./components/home.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';

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

import gargantilla from "./resources/image_productos/gargantilla.png";
import bolso from "./resources/image_productos/bolso_grande.png";
import sombreroFucsia from "./resources/image_productos/sombrero_fucsia.png";
import sombrero from "./resources/image_productos/sombrero.png";

// importacion creditos

//declaración array para usar como inventario
const inventario = [
  {
    "id": 1,
    "ref": "0153",
    "img": gargantilla,
    "Name": "Gargantilla Multicolor",
    "Descripcion": "Hecha a mano por artesanas Nariñences en el municipio de Sandoná.",
    "Precio": 350000,
    "Inventario": 12,
    "vendidos": 3
  },
  {
    "id": 2,
    "ref": "0189",
    "img": bolso,
    "Name": "Bolso Elegante",
    "Descripcion": "Hecha a mano por artesanas Nariñences en el municipio de Sandoná.",
    "Precio": 290000,
    "Inventario": 12,
    "vendidos": 3
  },
  {
    "id": 3,
    "ref": "0321",
    "img": sombreroFucsia,
    "Name": "Pava Fucsia para mujer",
    "Descripcion": "Hecha a mano por artesanas Nariñences en el municipio de Sandoná.",
    "Precio": 180000,
    "Inventario": 12,
    "vendidos": 3
  },
  {
    "id": 4,
    "ref": "0155",
    "img": sombrero,
    "Name": "Sombrero para hombre",
    "Descripcion": "Hecho a mano por artesanas Nariñences en el municipio de Sandoná.",
    "Precio": 215000,
    "Inventario": 12,
    "vendidos": 3
  },
  {
    "id": 5,
    "ref": "0133",
    "img": gargantilla,
    "Name": "Gargantilla Multicolor",
    "Descripcion": "Hecha a mano por artesanas Nariñences en el municipio de Sandoná.",
    "Precio": 350000,
    "Inventario": 12,
    "vendidos": 3
  },
  {
    "id": 6,
    "ref": "0253",
    "img": bolso,
    "Name": "Bolso Elegante",
    "Descripcion": "Hecha a mano por artesanas Nariñences en el municipio de Sandoná.",
    "Precio": 290000,
    "Inventario": 12,
    "vendidos": 3
  },
  {
    "id": 7,
    "ref": "0115",
    "img": sombreroFucsia,
    "Name": "Pava Fucsia para mujer",
    "Descripcion": "Hecha a mano por artesanas Nariñences en el municipio de Sandoná.",
    "Precio": 180000,
    "Inventario": 12,
    "vendidos": 3
  },
  {
    "id": 8,
    "ref": "0513",
    "img": sombrero,
    "Name": "Sombrero para hombre",
    "Descripcion": "Hecho a mano por artesanas Nariñences en el municipio de Sandoná.",
    "Precio": 215000,
    "Inventario": 12,
    "vendidos": 3
  },
  {
    "id": 9,
    "ref": "0893",
    "img": sombrero,
    "Name": "Sombrero para hombre",
    "Descripcion": "Hecho a mano por artesanas Nariñences en el municipio de Sandoná.",
    "Precio": 215000,
    "Inventario": 12,
    "vendidos": 3
  }
];

function App() {
  const [db, setDb] = useState(inventario);
  const [dataToEdit, setDataToEdit] = useState(inventario);

  const crearProducto = (data) => {
    data.id = Date.now();
    setDb([...db, data]);
  };

  const actualizarPruducto = (data) => {

  };

  const eliminarProducto = (id) => {

  };

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
                <ListaProductos data={db} />
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
                <ProductosAdmin data={db} />
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
