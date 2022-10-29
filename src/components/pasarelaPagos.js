import { Component, Fragment } from "react";


class PasarelaPagos extends Component(){
    render(){
        return(
            <Fragment>
                <div className="contenedor-metodo-pago">
                    <ul>
                        <li>Total a pagar</li>
                        <li> $795.000</li>
                    </ul>
                    <ul>
                        <li>Metodo de pago:</li>
                        <input type="radio">Pago contraentrega</input>
                    </ul>
                </div>
                <div className="contenedor-datos-envio">

                </div>
            </Fragment>
        )
    }
}