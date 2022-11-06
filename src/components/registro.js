import { Component } from "react";
import "../styles/registro.css";

export class Registro extends Component {
  render() {
    return (
      <center>
        <div class="contenedor-login">
        <center>
          <div class="contenedor-login">
            <div class="formulario">
              <h2 class="titulo-formulario-reg">Registrarse</h2>
              <form class="formatito-reg">
                <label for="usuario o email"></label>
                <input
                  class="campo-tex"
                  type="text"
                  name="usuario o email"
                  placeholder="Nombre"
                />
                <label for="correo"></label>
                <input
                  class="campo-tex"
                  type="text"
                  name="correo"
                  placeholder="Correo"
                />
                <label for="Telefono"></label>
                <input
                  class="campo-tex"
                  type="tel"
                  name="Telefono"
                  placeholder="Telefono"
                />
                <label for="Direccion"></label>
                <input
                  class="campo-tex"
                  type="text"
                  name="Dirección"
                  placeholder="Direccion"
                />
                <label for="usuario o email"></label>
                <input
                  class="campo-tex"
                  type="text"
                  name="usuario o email"
                  placeholder="Nombre"
                />
              </form>
              <div>
                <button onclick="btn" className="btn element">
                  <a class="line" href="/Home">Registrarse</a>
                </button>
              </div>
              <div className="pass">
                <br></br>
                <br></br>
                <a href="/" class="input">
                  ¿Ya tienes una cuenta?
                </a>
                </div>
            </div>
          </div>
        </center>
        </div>
      </center>
    );
  }
}
