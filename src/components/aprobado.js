import { Component } from "react";
import '../styles/aprobado.css'

export class Aprobado extends Component{
    render(){
        return(
            <center>
                <div class="contenedor-aprobacion">
                    <h2 class="aprobado">Transaccion aprobada</h2>
                </div>
                <div className="contenedor-resumen-aprobacion">
              <h4>Resumen de la compra</h4>
              <form className="div-titulo">
                <p className="text-Total">Total a pagar:</p>
                <p className="txt-cantidad">(3)</p>
                <p className="text-valor"> $ 680.000</p>
              </form>
              <br />
              <br />
              <br />
              <form className="div-total-pagar">
                <p className="text-Total">Total</p>
                <p className="text-valor"> $ 795.000</p>
              </form>
                 <div class="div-boton-finzalizar">
                  <a class="boton-finalizar"href="/Home">Finalizar                  </a>
                </div>
              </div>
            </center>
        )
    }
}