import React, { Component, Fragment } from "react";
import "../styles/vistaEditarPerfil.css";
import fotoPerfil from "../resources/usuario.png";
import botonGuardar from "../resources/guardar.png";

export class EditarPerfil extends Component {
  render() {
    return (
      <Fragment>
        <section>
          <center>
            <div class="containerFormato-editar">
              <div class="contenedor-elementos-editar">
                <p class="img-item-editar">
                  <img
                    class="fotoPerfil-editar"
                    src={fotoPerfil}
                    alt="Foto Perfil"
                  ></img>
                </p>
                <form class="formulario-editar">
                  <label for="Nombre"></label>
                  <input
                    class="list-item-editar"
                    type="text"
                    name="Nombre"
                    placeholder="Pepito Perez"
                  />
                  <label for="Correo"></label>
                  <input
                    class="list-item-editar"
                    type="email"
                    name="Correo"
                    placeholder="Pepito.Perez@mail.co"
                  />
                  <label for="Celular"></label>
                  <input
                    class="list-item-editar"
                    type="tel"
                    name="Celular"
                    placeholder="312 312 5544"
                  />
                  <label for="Dirección"></label>
                  <input
                    class="list-item-editar"
                    type="text"
                    name="Dirección"
                    placeholder="Calle falsa 5casa 4"
                  />
                  <label for="Contraseña"></label>
                  <input
                    class="list-item-editar"
                    type="password"
                    name="Contraseña"
                    placeholder="contraseña"
                  />
                </form>
                <div class="button-edit-editar">
                  <a href="/Perfil">
                    <img
                      class="botonEditar-editar"
                      src={botonGuardar}
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
