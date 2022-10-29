import React, { Component, Fragment } from 'react';
import '../styles/vistaPerfil.css'
import fotoPerfil from '../resources/usuario.png'
import botonEditar from '../resources/editar.png'


export class Perfil extends Component {

    render() {
        return (
            <Fragment>
                <section>
                    <center>
                        <div id="containerFormato">
                            <div id="contenedor-elementos">
                                <p id="img-item"><img id="fotoPerfil" src={fotoPerfil} alt="Foto Perfil"></img></p>
                                <div id="contenido-lista">
                                    <p id="list-item">Pepito Perez</p>
                                    <p id="list-item">Pepito.Perez@mail.co</p>
                                    <p id="list-item">312 312 5544</p>
                                    <p id="list-item">Calle falsa 5casa 4</p>
                                    <p id="list-item">contraseña</p>
                                </div>
                                <div>
                                    <button id="button-edit"><img id="botonEditar" src={botonEditar} alt="Bot+on editar"></img></button>
                                </div>
                            </div>
                        </div>
                    </center>
                </section>
            </Fragment>
        )
    }
}