import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import "../styles/vistaPerfil.css";
import fotoPerfil from "../resources/usuario.png";
import botonEditar from "../resources/editar.png";

export const Perfil = () => {
  
  //solo para pruebas. Se debe recibir el id por parametros
  const idRecibido = "638aa129cc564459b758369b";

  const [usuario, setUsuario] = useState({
    nombre: "",
    email: "",
    telefono: "",
    direccion: "",
    contraseña: ""
  });

  useEffect(() => {
    getUsuario();
  }, [])

  function getUsuario() {
    fetch(`http://localhost:5000/user/${idRecibido}`)
      .then((resp) => resp.json())
      .then((resp) => {
        return setUsuario(resp)
      })
      .catch((err) => console.log(err));
  }
  console.log(usuario, typeof(usuario));

  return (
    <>
      <section>
        <center>
          <div className="containerFormato">
          {Array.isArray(usuario) ? (usuario).map(user => 
            <div className="contenedor-elementos">
              <p className="img-item">
                <img className="fotoPerfil" src={fotoPerfil} alt="Foto Perfil"></img>
              </p>
              <div className="contenido-lista">
                <p className="list-item">{user.nombre}</p>
                <p className="list-item">{user.email}</p>
                <p className="list-item">{user.telefono}</p>
                <p className="list-item">{user.direccion}</p>
                <p  className="list-item">{user.contraseña}</p>
              </div>
              <div className="button-edit">
                <a href={`/Editar-Perfil/${user._id}`}>
                  <img
                    className="botonEditar"
                    src={botonEditar}
                    alt="Boton editar"
                  ></img>
                </a>
              </div>
            </div>
            ) : null}
          </div>
        </center>
      </section>
    </>
  );
}
