import { Fragment } from "react";
import { Component } from "react";
import '../styles/agregarProducto.css';



export class AgregarProducto extends Component {


    render() {
        return (
            <Fragment>
                <center>

                    <div class="formato">
                        <br></br>
                        <h2 class="titulo-formato">AGREGAR PRODUCTO</h2>
                        <br></br>
                        <form class="format">

                            <div class="Selección">
                                <label for="Nombre del Producto">Nombre del Producto: </label>
                                <select name="producto">
                                    <option value="">..</option>
                                    <option value="">Bolso Elegante</option>
                                    <option value="">Gargantilla Multicolor</option>
                                    <option value="">Pava fucsia para mujer</option>
                                    <option value="">Sombrero para hombre</option>
                                </select>
                            </div>
                            <br></br>
                            <div>
                                <label for="Referencia">Referencia: </label>
                                <input class="campo" type="number" name="Referencia" placeholder="" />
                            </div>
                            <br></br>
                            <div>
                                <label for="Referencia">Cantidad disponible: </label>
                                <input class="campo" type="number" name="Referencia" placeholder="" />
                            </div>
                            <br></br>
                            <div class="contenedor">
                                <lebel>Añadir imagen: </lebel>
                                <input class="form-control" type="file" name="add" />
                            </div>
                            <br></br>
                            <div>
                                <lebel>Precio unitario de compra: </lebel>
                                <input class="campo" type="number" name="Referencia" placeholder="" />
                            </div>
                            <br></br>
                            <div>
                                <lebel>Precio unitario de venta: </lebel>
                                <input class="campo" type="number" name="Referencia" placeholder="" />
                            </div>

                        </form>
                        <div >

                            <button onclick="btn" className="bton elemento" >

                                Guardar

                            </button>

                        </div>

                    </div>
                </center>
            </Fragment >

        );
    }

}

