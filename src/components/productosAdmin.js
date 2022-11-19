import '../styles/productosAdmin.css';
import { useState, useEffect } from 'react';
import editar from '../resources/ajustes.png';
import eliminar from '../resources/basura.png';

export const ProductosAdmin = () => {

  const [dataProductos, setDataProductos] = useState([]);

  useEffect(() => {
    getData();
  }, [])


  function getData() {
    fetch("http://localhost:5000/productos")
      .then((resp) => resp.json())
      .then((resp) => {
        return setDataProductos(resp)
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
    <center>
      <div className="titulo-prod-admin">
        <p className="textoListProductos">Lista de Productos</p>
      </div>
      </center>
      <div className="contenedorTabla">
        <table className="tabla-admin-prod">
          <thead>
            <tr className="encabezados">
              <th className="colRef">Ref.</th>
              <th>Imagen</th>
              <th>Nombre del producto</th>
              <th>Descripcion del producto</th>
              <th>Cant.</th>
              <th>Valor Unitario</th>
              <th>Editar</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {dataProductos.map((prod) =>
              <tr>
                <td className="colRef">{prod.referencia}</td>
                <td className="columnaImagen">
                  <img src={prod.imagen} className="imagenProducto" alt="ImagenProducto" />
                </td>
                <td>{prod.nombre}</td>
                <td>{prod.descripcion}</td>
                <td>{prod.stock}</td>
                <td>$ {prod.precio}</td>
                <td className="colIcono">
                  <a href={`/Admin-Modificar-Producto/${prod._id}`} className="iconos" alt="Editar" >
                    <img src={editar} className="iconos" alt="Editar" />
                  </a>
                </td>
                <td className="colIcono">
                  <a href={`/Admin-Eliminar-Producto/${prod._id}`} className="iconos" alt="Eliminar" >
                    <img src={eliminar} className="iconos" alt="Eliminar" />
                  </a>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <center>
      <div className="botonAgregar">
        <a href="/Admin-Nuevo-Producto">
          <p className="textoAgregar">Agregar nuevo producto</p>
        </a>
      </div>
      </center>
    </>
  );
};





