import { Component } from "react";
import "../styles/registro.css";

export class Registro extends Component {
  render() {
    return (
      <center>
        <div className="contenedor-login">
        <center>
          <div className="contenedor-login">
            <div className="formulario">
              <h2 className="titulo-formulario">Registrarse</h2>
              <form className="formatito">
                <label for="usuario o email"></label>
                <input
                  className="campotex"
                  type="text"
                  name="usuario o email"
                  placeholder="Nombre"
                />
                <label for="correo"></label>
                <input
                  className="campotex"
                  type="text"
                  name="correo"
                  placeholder="Correo"
                />
                <label for="Telefono"></label>
                <input
                  className="campotex"
                  type="tel"
                  name="Telefono"
                  placeholder="Telefono"
                />
                <label for="Direccion"></label>
                <input
                  className="campotex"
                  type="text"
                  name="Dirección"
                  placeholder="Direccion"
                />
                <label for="usuario o email"></label>
                <input
                  className="campotex"
                  type="text"
                  name="usuario o email"
                  placeholder="Nombre"
                />
              </form>
              <div>
                <button onclick="btn" className="btn element">
                  <a href="/Home">Registrarse</a>
                </button>
              </div>
              <div className="pass">
                <br></br>
                <br></br>
                <a href="/" className="input">
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
