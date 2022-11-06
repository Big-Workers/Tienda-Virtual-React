import { Fragment } from "react";
import { Component } from "react";
import React, { useState } from "react";
import "../styles/agregarProducto.css";

const inventarioVacio = [
  {
    id: null,
    ref: "",
    img: "",
    Name: "",
    Descripcion: "",
    Precio: null,
    Inventario: null,
    vendidos: null,
  },
];

export const AgregarProducto = ({
  prod,
  setDataToEditProd,
  crearProducto,
  actualizarProducto,
}) => {
  const [invent, setInvent] = useState(inventarioVacio);

  const Cambio = (e) => {
    setInvent({
      ...invent,
      [e.target.name]: e.target.value,
    });
  };

  const Submit = (e) => {
    e.preventDefault();

    if (invent.id === null) {
      crearProducto(invent);
    } else {
      actualizarProducto(invent);
    }

    Reset();
  };

  const Reset = (e) => {
    setInvent(inventarioVacio);
    setDataToEditProd(null);
  };
  return (
    <Fragment>
      <center>
        <div class="formato">
          <h2 class="titulo-formato">AGREGAR PRODUCTO</h2>
          <form class="format">
            <label for="nombre-Producto"></label>
            <input
              class="campo"
              type="text"
              name="nombre-producto"
              placeholder="Nombre del Producto"
              onChange={Cambio}
              value={invent.Name} //
            />
            <label for="referencia"></label>
            <input
              class="campo"
              type="text"
              name="referencia"
              placeholder="Referencia"
            />
            <label for="stock"></label>
            <input
              class="campo"
              type="text"
              name="stock"
              placeholder="Stock"
              onChange={Cambio}
              value={invent.Inventario} //
            />
            <label for="valor"></label>
            <input
              class="campo"
              type="text"
              name="valor"
              placeholder="Valor"
              onChange={Cambio}
              value={invent.Precio}
            />
            <label for="descripcion"></label>
            <input
              class="campo"
              type="text"
              name="descripcion"
              placeholder="Descripción"
              onChange={Cambio}
              value={invent.Descripcion} //
            />
            <label for="agregar-imagen"></label>
            <input
              class="Seleccion"
              type="file"
              name="agregar-imagen"
              placeholder="Añadir Imagenes"
              onChange={Cambio}
              value={invent.img}
            />
            <div class="Boton-agregar-producto">
              <a
                type="submit"
                href="/Admin-Productos"
                onClick={Submit}
                className="bton elemento"
              >
                Ingresar
              </a>
            </div>
          </form>
        </div>
      </center>
    </Fragment>
  );
};
