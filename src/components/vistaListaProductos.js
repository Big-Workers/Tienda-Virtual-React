import "../styles/vistaListaProductos.css";
import { useState, useEffect } from 'react';
import axios from "axios";
import iconoCarrito from "../resources/carrito-de-compras-azul.png";


export const ListaProductos = () => {

  const [dataProductos, setDataProductos] = useState([]);

  useEffect(() => {
    getData();
  }, [])

  //se obtiene los productos de la base de datos
  function getData() {
    fetch("http://localhost:5000/productosStock")
      .then((resp) => resp.json())
      .then((resp) => {
        return setDataProductos(resp)
      })
      .catch((err) => console.log(err));
  };

  //se agrega el producto al carrito
  const addProductosCarrito = async (producto) => {
    const { nombre, imagen, precio } = producto;

    await axios.post("http://localhost:5000/postProductosCarrito", { nombre, imagen, precio });

    getData();
  };

  return (
    <div className="container-productos">
      {dataProductos.map((prod) =>
        <div className="producto">
          <div className="imagen-producto-box">
            <img
              className="imagen-producto"
              alt="Imagen de Producto"
              src={prod.imagen}
            ></img>
          </div>
          <div className="info-producto">
            <center>
              <h2 className="titulo">{prod.nombre}</h2>
              <p className="descripcion">
                {prod.descripcion}{" "}
              </p>
            </center>
            <h2 className="precio-lista-productos">$ {prod.precio}</h2>
            <div className="opciones-prod">
              <div>
                {!prod.enCarrito ? (
                  <a className="boton-agregar" href="#" onClick={() => addProductosCarrito(prod)}>Agregar</a>
                ) : (
                  <a className="boton-agregar" >En el carrito</a>
                )}
              </div>
              <img
                className="icono-carrito"
                alt="icono carrito"
                src={iconoCarrito}
              ></img>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
