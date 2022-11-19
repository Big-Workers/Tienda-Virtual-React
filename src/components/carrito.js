import "../styles/carritoCompras.css";
import { useEffect, useState } from "react";
import axios from "axios";
import basura from "../resources/basura.png";

export const CarritoCompras = () => {

  const [carritoItems, setCarritoItems] = useState([]);

  function getProductosCarrito() {
    fetch("http://localhost:5000/productosCarrito")
      .then((resp) => resp.json())
      .then((resp) => {
        return setCarritoItems(resp)
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProductosCarrito();
  }, []);
  console.log(carritoItems);
  return (
    <>
      <center>
        <div className="container-carrito">
          <div className="Contenedor-tabla">
            <table className="table-carrito">
              <thead>
                <tr className="encabezados">
                  <th className="imagen">Imagen</th>
                  <th className="nombre-producto">Nombre</th>
                  <th className="detalles">Cantidad</th>
                  <th className="detalles">Acciones</th>
                </tr>
              </thead>
              {carritoItems.map((prod) =>
                <tbody key={prod._id}>

                  <tr>
                    <td className="imagen">
                      <img src={"imagen"} className="imagen" alt="imagen" />
                    </td>
                    <td>prod.nombre</td>
                    <td>prod.cantidad</td>
                    <td>
                      {" "}
                      $prod.precio
                      <div className="opciones-prod">
                        {/*<select className="cantidad">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
              </select>*/}
                        <a href="#">
                          <img src={basura} className="iconos" alt="icono" />
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              )}
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
            <div className="div-boton">
              <div className="boton-seguir-comprando">
                <a href="/Productos">
                  <p className="texto-seguir-comprando">seguir comprando</p>
                </a>
              </div>
            </div>
            <div className="div-boton2">
              <div className="boton-pagar-ahora">
                <a href="/Pasarela">
                  <p className="texto-pagar-ahora">¡Pagar ahora!</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </center>
    </>
  );
}
