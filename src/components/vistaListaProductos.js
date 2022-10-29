import { Fragment } from "react";
import { Component } from "react";
import "../styles/vistaListaProductos.css";
import iconoCarrito from "../resources/carrito-de-compras-azul.png";
import img_1 from "../resources/image_productos/gargantilla.png";
import img_2 from "../resources/image_productos/bolso_grande.png";
import img_3 from "../resources/image_productos/sombrero_fucsia.png";
import img_4 from "../resources/image_productos/sombrero.png";

export class ListaProductos extends Component {
  render() {
    return (
      <Fragment>
        <div class="container-productos">
          <div class="producto">
            <div class="imagen-producto-box">
              <img
                class="imagen-producto"
                alt="Imagen de Producto"
                src={img_1}
              ></img>
            </div>
            <div class="info-producto">
              <center>
                <h2 class="titulo">Gargantilla Multicolor</h2>
                <p class="descripcion">
                  Gargantilla hecha a mano por artesanas Nariñenses en el
                  municipio de Sandoná.{" "}
                </p>
              </center>
              <h2 class="precio">$ 350.000</h2>
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
          <div class="producto">
            <div class="imagen-producto-box">
              <img
                class="imagen-producto"
                alt="Imagen de Producto"
                src={img_2}
              ></img>
            </div>
            <div class="info-producto">
              <center>
                <h2 class="titulo">Bolso Elegante</h2>
                <p class="descripcion">
                  Hecho a mano por artesanas Nariñenses en el municipio de
                  Sandoná.{" "}
                </p>
              </center>
              <h2 class="precio">$ 290.000</h2>
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
          <div class="producto">
            <div class="imagen-producto-box">
              <img
                class="imagen-producto"
                alt="Imagen de Producto"
                src={img_3}
              ></img>
            </div>
            <div class="info-producto">
              <center>
                <h2 class="titulo">Pava fucsia para mujer</h2>
                <p class="descripcion">
                  Hecho a mano por artesanas Nariñenses en el municipio de
                  Sandoná.{" "}
                </p>
              </center>
              <h2 class="precio">$ 180.000</h2>
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
          <div class="producto">
            <div class="imagen-producto-box">
              <img
                class="imagen-producto"
                alt="Imagen de Producto"
                src={img_4}
              ></img>
            </div>
            <div class="info-producto">
              <center>
                <h2 class="titulo">Sombrero para hombre</h2>
                <p class="descripcion">
                  Hecho a mano por artesanas Nariñenses en el municipio de
                  Sandoná.{" "}
                </p>
              </center>
              <h2 class="precio">$ 215.000</h2>
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
          <div class="producto">
            <div class="imagen-producto-box">
              <img
                class="imagen-producto"
                alt="Imagen de Producto"
                src={img_1}
              ></img>
            </div>
            <div class="info-producto">
              <center>
                <h2 class="titulo">Gargantilla Multicolor</h2>
                <p class="descripcion">
                  Gargantilla hecha a mano por artesanas Nariñenses en el
                  municipio de Sandoná.{" "}
                </p>
              </center>
              <h2 class="precio">$ 350.000</h2>
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
          <div class="producto">
            <div class="imagen-producto-box">
              <img
                class="imagen-producto"
                alt="Imagen de Producto"
                src={img_2}
              ></img>
            </div>
            <div class="info-producto">
              <center>
                <h2 class="titulo">Bolso Elegante</h2>
                <p class="descripcion">
                  Hecho a mano por artesanas Nariñenses en el municipio de
                  Sandoná.{" "}
                </p>
              </center>
              <h2 class="precio">$ 290.000</h2>
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
          <div class="producto">
            <div class="imagen-producto-box">
              <img
                class="imagen-producto"
                alt="Imagen de Producto"
                src={img_3}
              ></img>
            </div>
            <div class="info-producto">
              <center>
                <h2 class="titulo">Pava fucsia para mujer</h2>
                <p class="descripcion">
                  Hecho a mano por artesanas Nariñenses en el municipio de
                  Sandoná.{" "}
                </p>
              </center>
              <h2 class="precio">$ 180.000</h2>
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
          <div class="producto">
            <div class="imagen-producto-box">
              <img
                class="imagen-producto"
                alt="Imagen de Producto"
                src={img_4}
              ></img>
            </div>
            <div class="info-producto">
              <center>
                <h2 class="titulo">Sombrero para hombre</h2>
                <p class="descripcion">
                  Hecho a mano por artesanas Nariñenses en el municipio de
                  Sandoná.{" "}
                </p>
              </center>
              <h2 class="precio">$ 215.000</h2>
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
          <div class="producto">
            <div class="imagen-producto-box">
              <img
                class="imagen-producto"
                alt="Imagen de Producto"
                src={img_1}
              ></img>
            </div>
            <div class="info-producto">
              <center>
                <h2 class="titulo">Gargantilla Multicolor</h2>
                <p class="descripcion">
                  Gargantilla hecha a mano por artesanas Nariñenses en el
                  municipio de Sandoná.{" "}
                </p>
              </center>
              <h2 class="precio">$ 350.000</h2>
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
        </div>
      </Fragment>
    );
  }
}
