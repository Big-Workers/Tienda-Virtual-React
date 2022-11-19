import "../styles/modificarProducto.css";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


export const EliminarProducto = () => {

  const params = useParams()
  const [dataProductos, setDataProductos] = useState([]);


  useEffect(() => {
    getData();
  }, [])


  function getData() {
    fetch(`http://localhost:5000/productos/${params._id}`)
      .then((resp) => resp.json())
      .then((resp) => {
        return setDataProductos(resp)
      })
      .catch((err) => console.log(err));
  }

  function eliminarProducto() {

    const datosJSON = JSON.stringify(dataProductos)
    fetch(`http://localhost:5000/eliminarProducto/${params._id}`, {
      method: "PUT",
      body: datosJSON,
      headers: {
        "Content-Type": "application/json",
      },
    })
    alert("Producto eliminado correctamente")
  }

  return (
    <>
      <center>

        <div className="div-modificar-producto">
          {dataProductos.map((prod) =>
            <div className="datos-modificar-producto">
              <h2 className="titulo-modificar-producto">PRODUCTO A ELIMINAR</h2>
              <p>Imagen:</p>
              <img src={prod.imagen} className="imagenProducto" alt="ImagenProducto" />
              <p>Referencia:  {prod.referencia}</p>
              <p>Nombre:  {prod.nombre}</p>
              <p>Descripción:  {prod.descripcion}</p>
              <p>Stock:  {prod.stock}</p>
              <p>Precio:  {prod.precio}</p>
            </div>
          )}
          <h3 className="titulo-modificar-producto">¿ESTAS SEGURO QUE DESEAS ELIMINAR EL PRODUCTO?</h3>
          <button onClick={eliminarProducto}><a href="/Admin-Productos">Eliminar</a></button>
          <button><a href="/Admin-Productos">Cancelar</a></button>
        </div>
      </center>
    </>
  );

}
