import { Component } from "react";
import '../styles/aprobado.css'

export class Rechazado extends Component{
    render(){
        return(
            <center>
                <div class="contenedor-aprobacion">
                    <h2 class="rechazado">Transaccion rechazada</h2>
                </div>
                <div className="contenedor-resumen-aprobacion">
              <h4 class="pedido-rechazado">Su pedido no fue procesado</h4>
              <div class="texto-rechazado">
                <h3 class="contenido-texto-rechazado">Consulte con su entidad bancaria.</h3>
              </div>
              <div class="div-boton2">
                <div class="boton-reintentar">
                  <a href="/Carrito">
                    <p class="texto-pagar-ahora">Reintentar</p>
                  </a>
                </div>
              </div>
              </div>
            </center>
        )
    }
}