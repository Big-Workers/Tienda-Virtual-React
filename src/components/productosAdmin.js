import '../styles/productosAdmin.css';
import { useState } from "react";
import { useEffect } from "react";
import editar from '../resources/ajustes.png';
import { ModificarProducto } from './modificarProducto';

export const ProductosAdmin = () => {
    const [dataProd, setDataProd] = useState([]);
  
    useEffect(() => {
      getData();
    }, []);
  
    function getData() {
      fetch("http://localhost:5000/productos")
        .then((res) => res.json())
        .then((res) => {
          console.log(res)
          return setDataProd(res);
        })
        .catch((err) => console.log(err));
    }
  
    return (
        <>
            <div class="contenedorTabla">
                <table class="tabla-admin-prod">
                    <tr class="encabezados">
                        <th class="colRef">Referencia</th>
                        <th>Imagen</th>
                        <th>Nombre del producto</th>
                        <th>Stock</th>
                        <th>Valor Unitario</th>
                        
                        <th>Editar</th>
                    </tr>
                    {dataProd.map((prod) =>
                    <tr>
                        <td class="colRef">{prod.referencia}</td>
                        <td class="columnaImagen"><img src={prod.imagen} class="imagenProducto" alt="Gargantilla" /></td>
                        <td>{prod.nombre}</td>
                        <td class="colIcono">{prod.stock}</td>
                        <td>$ {prod.precio}</td>
                        
                        <td class="colIcono"><a href="/Admin-Modificar-Producto" onClick={dataProd.map((prod) => <ModificarProducto key={prod.id}  />)}><img src={editar} class="iconos" alt="Ver" /></a></td>
                    </tr>
                    )}
                </table>
            </div>
        </>
    );
};

/*

import ojo from '../resources/ver.png';
<th>Ver</th>
<td class="colIcono"><a href="#" ><img src={ojo} class="iconos" alt="Ver" /></a></td>
*/                        