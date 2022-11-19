import { Component, Fragment } from "react";
import '../styles/pasarelaPagos.css';
import pago from '../resources/metodo-de-pago.png';


export class PasarelaPagos extends Component {
    render() {
        return (
            <Fragment>
                <div className="contenedor-general">
                    <div className="contenedor-interno div-total-pagar">
                        <form className="div-titulo">
                            <p className="text-titulo">Total a pagar:</p>
                            <p className="text-valor"> $ 795.000</p>
                        </form>
                        <form className="div-metodo-pago">
                            <div className="metodo-pago-icono">
                                <p>Metodo de pago:</p>
                                <img src={pago} className="icono-pago" alt="Pagar" />
                            </div>
                            <p className="radio-contraentrega"><input type="radio" className="seleccion-metodo-pago"></input>Pago contraentrega</p>
                        </form>
                    </div>
                    <div className="contenedor-interno">
                        <form className="titulo-datos-envio">
                            <p >Datos de envío</p>
                        </form>
                        <form className="div-datos-envio">
                            <div className="formulario-envio">
                                <p className="etiqueta-datos-envio">Nombre:</p>
                                <p>Pepito Pérez</p>
                            </div>
                            <div className="formulario-envio">
                                <p className="etiqueta-datos-envio">Dirección:</p>
                                <p>Calle falsa 5 casa 4</p>
                            </div>
                            <div className="formulario-envio">
                                <p className="etiqueta-datos-envio">Ciudad:</p>
                                <p>Bogotá</p>
                            </div>
                            <div className="formulario-envio">
                                <p className="etiqueta-datos-envio">Teléfono:</p>
                                <p>3123125544</p>
                            </div>
                            <div className="div-dir-opcional">
                                <p className="etiqueta-datos-envio">Dirección de envío alternativa:</p>
                                <input type="text" placeholder="(opcional)" className="input-dir-opcional"></input>
                            </div>
                        </form>
                        <div className="div-boton">
                            <div className="boton-continuar">
                                <a href="/Aprobado">
                                    <p className="texto-continuar">Continuar</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
