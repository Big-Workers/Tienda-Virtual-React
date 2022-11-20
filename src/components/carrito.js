import "../styles/carritoCompras.css";
import { useEffect, useState } from "react";
import axios from "axios";
import basura from "../resources/basura.png";

export const CarritoCompras = () => {

  const [carritoItems, setCarritoItems] = useState([]);

  function getProductosCarrito() {
    fetch("http://localhost:5000/getProductosCarrito")
      .then((resp) => resp.json())
      .then((resp) => {
        return setCarritoItems(resp)
      })
      .catch((err) => console.log(err));
  };


  const editarItemCarrito = async (id, query, cantidad) => {
    if (query === "del" && cantidad === 1) {
      await axios
        .delete(`http://localhost:5000/delProductosCarrito/${id}`)
        .then(({ data }) => console.log(data));
    } else {
      await axios
        .put(`http://localhost:5000/putProductosCarrito/${id}?query=${query}`, {
          cantidad,
        })
        .then(({ data }) => console.log(data));
    }
    getProductosCarrito();
    resumenCarrito("cantidad");
    resumenCarrito("precio");
  };

  const resumenCarrito = async (query) => {
    await axios
      .get(`http://localhost:5000/putResumenCarrito?query=${query}`)
      .then(({ data }) => console.log(data));
    getResumenCarrito();
  };

  const [resumenItems, setResumenItems] = useState([]);

  function getResumenCarrito() {
    fetch("http://localhost:5000/getResumenCarrito")
      .then((resp) => resp.json())
      .then((resp) => {
        return setResumenItems(resp)
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProductosCarrito();
    getResumenCarrito();
    resumenCarrito("cantidad");
    resumenCarrito("precio");
  }, []);

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
                  <th className="detalles">Precio</th>
                  <th className="detalles">Sacar del carrito</th>
                </tr>
              </thead>
              {carritoItems.map((prod) =>
                <tbody>

                  <tr>
                    <td className="imagen">
                      <img src={prod.imagen} className="imagen" alt="imagen" />
                    </td>
                    <td>{prod.nombre}</td>
                    <td>
                      {prod.cantidad}
                      &nbsp;
                      <button onClick={()=> editarItemCarrito(prod._id, "add", prod.cantidad)}>+</button>
                      {prod.cantidad === 1 ? (
                        <button>-</button>
                      ) : (
                        <button onClick={()=>editarItemCarrito(prod._id, "del", prod.cantidad)}>-</button>
                      )}

                    </td>
                    <td>
                      {" "}
                      ${(prod.precio * prod.cantidad)}
                    </td>
                    <td>
                      <div className="opciones-prod">
                        <a href="#" onClick={() => editarItemCarrito(prod._id, "del", 1)}>
                          <img src={basura} className="iconos" alt="icono" />
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              )}
            </table>
          </div>
          {resumenItems.map((datos) =>
            <div className="contenedor-resumen">
              <h4 className="titulo-resumen-compra">Resumen de la compra</h4>
              <form className="div-titulo">
                <p className="text-Total">Total productos en carrito:</p>
                <p className="text-valor">{datos.cantidad}</p>
              </form>
              <form className="div-total-pagar">
                <p className="text-Total text-total-big">Total de la compra:</p>
                <p className="text-valor text-valor-big"> $ {datos.total}</p>
              </form>
              <div className="div-boton-finzalizar">
                <a className="boton-finalizar" href="/Aprobado">Pagar ahora</a>
              </div>
            </div>
          )}
        </div>
      </center>
    </>
  );
}
