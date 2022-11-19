import React, { Component, Fragment } from "react";
import "../styles/vistaPerfil.css";
import fotoPerfil from "../resources/usuario.png";
import botonEditar from "../resources/editar.png";

export class Perfil extends Component {
  render() {
    return (
      <Fragment>
        <section>
          <center>
            <div className="containerFormato">
              <div className="contenedor-elementos">
                <p className="img-item">
                  <img className="fotoPerfil" src={fotoPerfil} alt="Foto Perfil"></img>
                </p>
                <div className="contenido-lista">
                  <p className="list-item">Pepito Perez</p>
                  <p className="list-item">Pepito.Perez@mail.co</p>
                  <p className="list-item">312 312 5544</p>
                  <p className="list-item">Calle falsa 5casa 4</p>
                  <p className="list-item">contraseña</p>
                </div>
                <div className="button-edit">
                  <a href="/Editar-Perfil">
                    <img
                      className="botonEditar"
                      src={botonEditar}
                      alt="Boton editar"
                    ></img>
                  </a>
                </div>
              </div>
            </div>
          </center>
        </section>
      </Fragment>
    );
  }
}
