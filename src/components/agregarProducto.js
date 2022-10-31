import { Fragment } from "react";
import { Component } from "react";
import "../styles/agregarProducto.css";

export class AgregarProducto extends Component {
  render() {
    return (
      <Fragment>
        <center>
          <div class="formulario">
            <h2 class="titulo-formulario">AGREGAR PRODUCTO</h2>
            <form class="format">
              <label for="Nonbre del Producto"></label>
              <input class="campotex" type="text" name="Nombre del Producto" />
              <br></br>
              <label for="Nonbre del Producto"></label>
              <input class="campotex" type="text" name="Nombre del Producto" />
              <br></br>
              <label for="Nonbre del Producto"></label>
              <input class="campotex" type="text" name="Nombre del Producto" />
              <br></br>
              <label for="Nonbre del Producto"></label>
              <input class="campotex" type="text" name="Nombre del Producto" />
            </form>
            <div>
              <button onclick="btn" className="btn element">
                Ingresar
              </button>
            </div>
          </div>
        </center>
      </Fragment>
    );
  }
}
