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
            <div className="containerFormato-editar">
              <div className="contenedor-elementos-editar">
                <p className="img-item-editar">
                  <img
                    className="fotoPerfil-editar"
                    src={fotoPerfil}
                    alt="Foto Perfil"
                  ></img>
                </p>
                <form className="formulario-editar">
                  <label for="Nombre"></label>
                  <input
                    className="list-item-editar"
                    type="text"
                    name="Nombre"
                    placeholder="Pepito Perez"
                  />
                  <label for="Correo"></label>
                  <input
                    className="list-item-editar"
                    type="email"
                    name="Correo"
                    placeholder="Pepito.Perez@mail.co"
                  />
                  <label for="Celular"></label>
                  <input
                    className="list-item-editar"
                    type="tel"
                    name="Celular"
                    placeholder="312 312 5544"
                  />
                  <label for="Dirección"></label>
                  <input
                    className="list-item-editar"
                    type="text"
                    name="Dirección"
                    placeholder="Calle falsa 5casa 4"
                  />
                  <label for="Contraseña"></label>
                  <input
                    className="list-item-editar"
                    type="password"
                    name="Contraseña"
                    placeholder="contraseña"
                  />
                </form>
                <div className="button-edit-editar">
                  <a href="/Perfil">
                    <img
                      className="botonEditar-editar"
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
