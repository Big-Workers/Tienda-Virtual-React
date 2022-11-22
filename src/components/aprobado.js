import '../styles/aprobado.css'
import {useState, useEffect} from "react";

export const Aprobado = () => {

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
    getResumenCarrito();
  }, []);

  function vaciarCarrito() {
    fetch("http://localhost:5000/vaciarCarrito")
      .then((resp) => resp.json())
      .then((resp) => {
        return (resp)
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
    <center>
      <h1 className="titulo-modificar-producto">Transacción Aprobada</h1>
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
            <a className="boton-finalizar" href="/Productos" onClick={vaciarCarrito}>Terminar</a>
          </div>
        </div>
      )}
      </center>
    </>
  )
}