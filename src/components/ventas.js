import { Component } from "react";
import "../styles/ventas.css";
import img_1 from "../resources/image_productos/gargantilla.png";
import img_2 from "../resources/image_productos/bolso_grande.png";
import img_3 from "../resources/image_productos/sombrero_fucsia.png";
import img_4 from "../resources/image_productos/sombrero.png";

export class Ventas extends Component {
  render() {
    return (
      <center>
        <div className="contenedor-ventas">
          <table className="tabla-ventas" border="1" cellpadding>
            <tr>
              <th> Ref </th>
              <th> Imágen </th>
              <th> Nombre del producto </th>
              <th> Cantidad </th>
              <th> Valor unitario </th>
            </tr>
            <tr>
              <td>0153</td>
              <td>
                <img className="img-ventas" src={img_1} alt="producto"></img>
              </td>
              <td>Gargantilla multicolor</td>
              <td>1</td>
              <td>350.000</td>
            </tr>
            <tr>
              <td>0153</td>
              <td>
                <img className="img-ventas" src={img_2} alt="producto"></img>
              </td>
              <td>Bolso Grande</td>
              <td>1</td>
              <td>350.000</td>
            </tr>
            <tr>
              <td>0153</td>
              <td>
                <img className="img-ventas" src={img_3} alt="producto"></img>
              </td>
              <td>Sombrero Fucsia</td>
              <td>1</td>
              <td>350.000</td>
            </tr>
            <tr>
              <td>0153</td>
              <td>
                <img className="img-ventas" src={img_4} alt="producto"></img>
              </td>
              <td>Sombrero Hombre</td>
              <td>1</td>
              <td>350.000</td>
            </tr>
          </table>
        </div>
      </center>
    );
  }
}
