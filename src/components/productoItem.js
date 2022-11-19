import { useEffect, useState } from 'react';

export const ProductoItem = ({ data }) => {//recibo el data con el id del producto

  const [dataProductos, setDataProductos] = useState([]);//inicializo el array de productos vacio

  useEffect(() => {
    getData();
  }, [])


  function getData() {
    fetch(`http://localhost:5000/productos/${data}`)//obtengo el producto completo enviando el id
      .then((resp) => resp.json())
      .then((resp) => {
        return setDataProductos(resp)
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      {dataProductos.map((prod) =>//recorro cada propiedad del producto recibido
        <div className="datos-modificar-producto">
          <h2 className="titulo-modificar-producto">PRODUCTO A MODIFICAR</h2>
          <p>Imagen:</p>
          <img src={prod.imagen} className="imagenProducto" alt="ImagenProducto" />
          <p>Referencia:  {prod.referencia}</p>
          <p>Nombre:  {prod.nombre}</p>
          <p>Descripción:  {prod.descripcion}</p>
          <p>Stock:  {prod.stock}</p>
          <p>Precio:  {prod.precio}</p>
        </div> 
      )
    }
    </>
  )
}