import { Component } from "react";
import '../styles/aprobado.css'

export class Rechazado extends Component{
    render(){
        return(
            <center>
                <div className="contenedor-aprobacion">
                    <h2 className="rechazado">Transaccion rechazada</h2>
                </div>
                <div className="contenedor-resumen-aprobacion">
              <h4 className="pedido-rechazado">Su pedido no fue procesado</h4>
              <div className="texto-rechazado">
                <h3 className="contenido-texto-rechazado">Consulte con su entidad bancaria.</h3>
              </div>
              <div className="div-boton2">
                <div className="boton-reintentar">
                  <a href="/Carrito">
                    <p className="texto-pagar-ahora">Reintentar</p>
                  </a>
                </div>
              </div>
              </div>
            </center>
        )
    }
}