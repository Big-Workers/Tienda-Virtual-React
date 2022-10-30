import { Component } from 'react';
import { Fragment } from 'react';
import '../styles/productosAdmin.css';
import gargantilla from '../resources/image_productos/gargantilla.png';
import sombrero from '../resources/image_productos/sombrero.png';
import bolso from '../resources/image_productos/bolso_grande.png';
import ojo from '../resources/ver.png';
import editar from '../resources/ajustes.png';

export class ProductosAdmin extends Component {
    render() {
        return (
            <Fragment >
                <div class="titulo">
                    <p class="textoListProductos">Lista de Productos</p>
                </div>
                <div class="contenedorTabla">
                    <table>
                        <tr class="encabezados">
                            <th class="colRef">Ref.</th>
                            <th>Imagen</th>
                            <th>Nombre del producto</th>
                            <th>Cant.</th>
                            <th>Valor Unitario</th>
                            <th>Ver</th>
                            <th>Editar</th>
                        </tr>
                        <tr>
                            <td class="colRef">0153</td>
                            <td class="columnaImagen"><img src={gargantilla} class="imagenProducto" alt="Gargantilla" /></td>
                            <td>Gargantilla multicolor</td>
                            <td>53</td>
                            <td>$350.000</td>
                            <td class="colIcono"><a href="#"><img src={ojo} class="iconos" alt="Ver" /></a></td>
                            <td class="colIcono"><a href="#"><img src={editar} class="iconos" alt="Ver" /></a></td>
                        </tr>
                        <tr>
                            <td class="colRef">0189</td>
                            <td class="columnaImagen"><img src={bolso} class="imagenProducto" alt="BolsoGrande" /></td>
                            <td>Bolso grande tejido a mano</td>
                            <td>53</td>
                            <td>$350.000</td>
                            <td class="colIcono"><a href="#"><img src={ojo} class="iconos" alt="Ver" /></a></td>
                            <td class="colIcono"><a href="#"><img src={editar} class="iconos" alt="Ver" /></a></td>
                        </tr>
                        <tr>
                            <td class="colRef">0321</td>
                            <td class="columnaImagen"><img src={sombrero} class="imagenProducto" alt="SombreroFino" /></td>
                            <td>Sombrero superfino</td>
                            <td>53</td>
                            <td>$350.000</td>
                            <td class="colIcono"><a href="#"><img src={ojo} class="iconos" alt="Ver" /></a></td>
                            <td class="colIcono"><a href="#"><img src={editar} class="iconos" alt="Ver" /></a></td>
                        </tr>
                    </table>
                </div>
                <div class="botonAgregar">
                    <a href="#">
                        <p class="textoAgregar">Agregar</p>
                    </a>
                </div>
            </Fragment>
        )
    }
};
