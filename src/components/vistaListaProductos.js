import { Fragment } from "react";
import { Component } from "react";
import "../styles/vistaListaProductos.css";
import iconoCarrito from "../resources/carrito-de-compras-azul.png";

export const ListaProductos = ({ data }) => {
  return (
    <div class="container-productos">
      {data.map((prod) =>
        <div class="producto">
          <div class="imagen-producto-box">
            <img
              class="imagen-producto"
              alt="Imagen de Producto"
              src={(prod.img)}
            ></img>
          </div>
          <div class="info-producto">
            <center>
              <h2 class="titulo">{prod.Name}</h2>
              <p class="descripcion">
                {prod.Descripcion}{" "}
              </p>
            </center>
            <h2 class="precio-lista-productos">$ {prod.Precio}00</h2>
            <div class="opciones-prod">
              <select class="select-cantidad">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <button class="boton-agregar">Agregar</button>
              <img
                class="icono-carrito"
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
