import { Fragment } from "react";
import { Component } from "react";
import "../styles/login.css";

export class Formulariologin extends Component {
  render() {
    return (
      <Fragment>
        <center>
          <div class="contenedor-login">
            <div class="formulario">
              <h2 class="titulo-formulario">Iniciar Sesión</h2>
              <form class="formatito">
                <label for="usuario o email"></label>
                <input
                  class="campotex"
                  type="text"
                  name="usuario o email"
                  placeholder="Usuario o Email"
                />
                <br></br>
                <br></br>
                <label for="contraseña"></label>
                <input
                  class="campotex"
                  type="text"
                  name="Contraseña"
                  placeholder="Contraseña"
                />
              </form>
              <div>
                <button onclick="btn" className="btn element">
                  <a class="line" href="/Home">Ingresar</a>
                </button>
              </div>
              <div className="pass">
                <br></br>
                <br></br>
                <a href="/Home" class="input">
                  ¿Olvidaste tu contraseña?
                </a>
                <br></br>
                <a href="/Registrarse" class="input">
                  Registrarse
                </a>
              </div>
            </div>
          </div>
        </center>
      </Fragment>
    );
  }
}
