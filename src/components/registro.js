import { Component } from "react";
import "../styles/register.css";

export class Registro extends Component {
    render() {
        return (
            <>
                <center>
                    <div class="container">
                        <div class="login-container">
                            <div class="register">
                                <h2 aling="center">Registro</h2>
                                <form action="">
                                    <input type="text" placeholder="Nombre:" class="nombre" /><br />
                                    <input type="text" placeholder="E-mail:" class="correo" /><br />
                                    <input type="text" placeholder="Teléfono:" class="telefono" /><br />
                                    <input type="text" placeholder="Dirección:" class="direccion" /><br />
                                    <input type="password" placeholder="Contraseña:" class="pass" /><br />
                                    <input type="password" placeholder="Confirmar contraseña:" class="repass" /><br />
                                    <input type="submit" class="submit" value="Registrarse" />
                                </form>
                            </div>
                        </div>
                    </div>
                </center>
            </>
        )
    }
};