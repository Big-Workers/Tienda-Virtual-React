import { Fragment } from "react";
import { Component } from "react";
import "../styles/agregarProducto.css";

export class ModificarProducto extends Component {
  render() {
    return (
      <Fragment>
        <center>
          <div class="formato">
            <h2 class="titulo-formato">MODIFICAR PRODUCTO</h2>
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
                placeholder="Descripción"
              />
              <br></br>
              <label for="Nonbre del Producto"></label>
              <input
                class="campo"
                type="text"
                name="Nombre del Producto"
                placeholder="Cantidad en Stock"
              />
              <br></br>
              <label for="Nombre del Producto"></label>
              <input
                class="campo"
                type="text"
                name="Nombre del Producto"
                placeholder="Precio Unitario de Venta"
              />
              <br></br>
              <label for="Nombre del Producto"></label>
              <input
                class="campo"
                type="text"
                name="Nombre del Producto"
                placeholder="Precio Unitario de compra"
              />
              <br></br>
              <label for="Nombre del Producto"></label>
              <input
                class="Seleccion"
                type="file"
                name="Nombre del Producto"
                placeholder="Añadir Imagenes"
              />
            </form>
            <div class="Boton-agregar-producto">
              <button onclick="bton" className="bton elemento">
                Guardar
              </button>
            </div>
          </div>
        </center>
      </Fragment>
    );
  }
}
