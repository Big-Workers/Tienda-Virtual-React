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
            <div class="containerFormato">
              <div class="contenedor-elementos">
                <p class="img-item">
                  <img class="fotoPerfil" src={fotoPerfil} alt="Foto Perfil"></img>
                </p>
                <div class="contenido-lista">
                  <p class="list-item">Pepito Perez</p>
                  <p class="list-item">Pepito.Perez@mail.co</p>
                  <p class="list-item">312 312 5544</p>
                  <p class="list-item">Calle falsa 5casa 4</p>
                  <p class="list-item">contraseña</p>
                </div>
                <div class="button-edit">
                  <a href="/Editar-Perfil">
                    <img
                      class="botonEditar"
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
