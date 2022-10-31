import { Fragment } from "react";
import { Component } from "react";
import "../styles/agregarProducto.css";

export class AgregarProducto extends Component {
  render() {
    return (
      <Fragment>
        <center>
          <div class="formato">
            <h2 class="titulo-formato">AGREGAR PRODUCTO</h2>
            <form class="format">
              <label for="Nombre del Producto"></label>
              <input
                class="campo"
                type="text"
                name="Nombre del Producto"
                placeholder="Nombre del Producto"
              />
              <br></br>
              <label for="Nonbre del Producto"></label>
              <input
                class="campo"
                type="text"
                name="Nombre del Producto"
                placeholder="Referencia"
              />
              <br></br>
              <label for="Nonbre del Producto"></label>
              <input
                class="campo"
                type="text"
                name="Nombre del Producto"
                placeholder="Cantidad disponible"
              />
              <br></br>
              <label for="Nonbre del Producto"></label>
              <input
                class="campo"
                type="text"
                name="Nombre del Producto"
                placeholder="Precio Unitario de compra"
              />
              <br></br>
              <label for="Nonbre del Producto"></label>
              <input
                class="campo"
                type="text"
                name="Nombre del Producto"
                placeholder="Precio Unitario de compra"
              />
              <br></br>
              <label for="Nonbre del Producto"></label>
              <input
                class="Seleccion"
                type="file"
                name="Nombre del Producto"
                placeholder="Añadir Imagenes"
              />
            </form>
            <div class="Boton-agregar-producto">
              <button onclick="bton" className="bton elemento">
                Ingresar
              </button>
            </div>
          </div>
        </center>
      </Fragment>
    );
  }
}
