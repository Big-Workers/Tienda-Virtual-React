import { Fragment } from "react";
import { Component } from "react";
import "../styles/login.css";

export class Formulariologin extends Component {
  render() {
    return (
      <Fragment>
        <center>
          <div className="contenedor-login">
            <div className="formulario">
              <h2 className="titulo-formulario">Iniciar Sesión</h2>
              <form className="formatito">
                <label for="usuario o email"></label>
                <input
                  className="campotex"
                  type="text"
                  name="usuario o email"
                  placeholder="Usuario o Email"
                />
                <br></br>
                <br></br>
                <label for="contraseña"></label>
                <input
                  className="campotex"
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
                <a href="/Home" className="input">
                  ¿Olvidaste tu contraseña?
                </a>
                <br></br>
                <a href="/Registrarse" className="input">
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
