import { Fragment } from "react";
import { Component } from "react";
import React, { useState } from 'react';
import "../styles/agregarProducto.css";

const inventarioVacio = [
  {
    "id": null,
    "ref": "",
    "img": "",
    "Name": "",
    "Descripcion": "",
    "Precio": null,
    "Inventario": null,
    "vendidos": null
  }];

export const AgregarProducto = ({ prod, setDataToEditProd, crearProducto, actualizarProducto }) => {
  const [invent, setInvent] = useState(inventarioVacio);

  const Cambio = (e) => {
    setInvent({
      ...invent,
      [e.target.name]: e.target.value
    });
  };

  const Submit = (e) => {
    e.preventDefault();


    if (invent.id === null) {
      crearProducto(invent);
    } else {
      actualizarProducto(invent);
    };

    Reset();
  };

  const Reset = (e) => {
    setInvent(inventarioVacio);
    setDataToEditProd(null);

  }
  return (
    <>
      <center>
        <div class="formato">
          <h2 class="titulo-formato">AGREGAR PRODUCTO</h2>
          <form class="format" onSubmit={Submit}>
            <label for="Nombre del Producto"></label>
            <input
              class="campo"
              type="text"
              name="Nombre del Producto"
              placeholder="Nombre del Producto"
              onChange={Cambio} value={invent.Name}
            />
            <br></br>
            <label for="Nonbre del Producto"></label>
            <input
              class="campo"
              type="text"
              name="Nombre del Producto"
              placeholder="Referencia"
              onChange={Cambio} value={invent.ref}
            />
            <br></br>
            <label for="Nonbre del Producto"></label>
            <input
              class="campo"
              type="text"
              name="Nombre del Producto"
              placeholder="Cantidad disponible"
              onChange={Cambio} value={invent.Inventario}
            />
            <br></br>
            <label for="Nonbre del Producto"></label>
            <input
              class="campo"
              type="text"
              name="Nombre del Producto"
              placeholder="Precio Unitario de compra"
              onChange={Cambio} value={invent.Precio}
            />
            <br></br>
            <label for="Nonbre del Producto"></label>
            <input
              class="Seleccion"
              type="file"
              name="Nombre del Producto"
              placeholder="Añadir Imagenes"
              onChange={Cambio} value={invent.img}
            />
            <div class="Boton-agregar-producto">
              <a type="submit" href="/Admin-Productos" onClick={Submit} className="bton elemento" >
                Ingresar
              </a>
            </div>
          </form>
        </div>
      </center>
    </>
  );
};

