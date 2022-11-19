import { Component } from "react";
import '../styles/aprobado.css'

export class Aprobado extends Component{
    render(){
        return(
            <center>
                <div className="contenedor-aprobacion">
                    <h2 className="aprobado">Transaccion aprobada</h2>
                </div>
                <div className="contenedor-resumen-aprobacion">
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
                  <a href="#">
                    <p className="texto-seguir-comprando">seguir comprando</p>
                  </a>
                </div>
              </div>
              <div className="div-boton2">
                <div className="boton-pagar-ahora">
                  <a href="#">
                    <p className="texto-pagar-ahora">¡Pagar ahora!</p>
                  </a>
                </div>
              </div>
              </div>
            </center>
        )
    }
}