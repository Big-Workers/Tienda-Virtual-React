import { Component } from 'react';
import { Fragment } from 'react';
import '../styles/productosAdmin.css';
import gargantilla from '../resources/image_productos/gargantilla.png';
import sombrero from '../resources/image_productos/sombrero.png';
import bolso from '../resources/image_productos/bolso_grande.png';
import ojo from '../resources/ver.png';
import editar from '../resources/ajustes.png';
import { AgregarProducto } from './agregarProducto';

export const ProductosAdmin = ({ data, setDataToEditProd }) => {
    return (
        <>
            <div class="titulo-prod-admin">
                    <p class="textoListProductos">Lista de Productos</p>
            </div>
            <div class="contenedorTabla">
                <table class="tabla-admin-prod">
                    <tr class="encabezados">
                        <th class="colRef">Ref.</th>
                        <th>Imagen</th>
                        <th>Nombre del producto</th>
                        <th>Cant.</th>
                        <th>Valor Unitario</th>
                        <th>Ver</th>
                        <th>Editar</th>
                    </tr>
                    {data.map((prod) =>
                    <tr>
                        <td class="colRef">{prod.ref}</td>
                        <td class="columnaImagen"><img src={prod.img} class="imagenProducto" alt="Gargantilla" /></td>
                        <td>{prod.Name}</td>
                        <td>{prod.Inventario}</td>
                        <td>$ {prod.Precio}</td>
                        <td class="colIcono"><a href="#" ><img src={ojo} class="iconos" alt="Ver" /></a></td>
                        <td class="colIcono"><a href="/Admin-Nuevo-Producto" onClick={data.map((prod) => <AgregarProducto key={prod.id}  />)}><img src={editar} class="iconos" alt="Ver" /></a></td>
                    </tr>
                    )};
                </table>
            </div>
            <div class="botonAgregar">
                <a href="/Admin-Nuevo-Producto">
                    <p class="textoAgregar">Agregar</p>
                </a>
            </div>
        </>
    );
};





