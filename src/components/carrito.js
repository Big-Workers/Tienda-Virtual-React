import React, { Component, Fragment } from "react";
import "../styles/carritoCompras.css";
import gargantilla from "../resources/image_productos/gargantilla.png";
import sombrero from "../resources/image_productos/sombrero.png";
import bolsogrande from "../resources/image_productos/bolso_grande.png";
import basura from "../resources/basura.png";

export class CarritoCompras extends Component {
  render() {
    return (
      <Fragment>
        <center>
          <div className="container-carrito">
            <div className="Contenedor-tabla">
              <table class="table-carrito">
                <tr className="encabezados">
                  <th className="imagen"></th>
                  <th className="nombre-producto"></th>
                  <th className="detalles"></th>
                </tr>
                <tr>
                  <td class="imagen">
                    <img src={gargantilla} class="imagen" alt="imagen" />
                  </td>
                  <td>Gargantilla multicolor</td>
                  <td>
                    {" "}
                    $350.000
                    <div class="opciones-prod">
                      <select className="cantidad">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                      <a haref="#">
                        <img src={basura} class="iconos" alt="icono" />
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="imagen">
                    <img src={sombrero} class="imagen" alt="imagen" />
                  </td>
                  <td>Sombrero super fino</td>
                  <td >
                    $ 180.000
                    <div class="opciones-prod">
                      <select className="cantidad">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                      <a haref="#">
                        <img src={basura} class="iconos" alt="icono" />
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="imagen">
                    <img src={bolsogrande} class="imagen" alt="imagen" />
                  </td>
                  <td>Bolso Grande</td>
                  <td>
                    $ 290.000
                    <div class="opciones-prod">
                      <select className="cantidad">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                      <a haref="#">
                        <img src={basura} class="iconos" alt="imagen" />
                      </a>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
            <div className="contenedor-resumen">
              <h4>Resumen de la compra</h4>
              <form className="div-titulo">
                <p className="text-Total">Total a pagar:</p>
                <p className="txt-cantidad">(3)</p>
                <p className="text-valor"> $ 680.000</p>
              </form>
              <form className="div-envio">
                <p className="text-Total">Envio:</p>
                <p className="text-valor"> $ 15.000</p>
              </form>
              <br />
              <br />
              <br />
              <form className="div-total-pagar">
                <p className="text-Total">Total</p>
                <p className="text-valor"> $ 795.000</p>
              </form>
              <div class="div-boton">
                <div class="boton-seguir-comprando">
                  <a href="/Productos">
                    <p class="texto-seguir-comprando">seguir comprando</p>
                  </a>
                </div>
              </div>
              <div class="div-boton2">
                <div class="boton-pagar-ahora">
                  <a href="/Pasarela">
                    <p class="texto-pagar-ahora">¡Pagar ahora!</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </center>
      </Fragment>
    );
  }
}