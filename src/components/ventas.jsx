import { useState } from "react";
import { useEffect } from "react";
import "../styles/ventas.css";

export const Ventas = () => {
  const [dataVentas, setDataVentas] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    fetch("http://localhost:5000/ventas")
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        return setDataVentas(res);
      })
      .catch((err) => console.log(err));
  }

  return (
    <center>
      <div class="contenedor-ventas">
        <table className="tabla-ventas" cellpadding>
          <thead class="thead-ventas">
            <tr>
              <td className="th-col-100"> Fecha </td>
              <td className="th-col-130"> Ticket </td>
              <td> Imagen</td>
              <td> Nombre del producto </td>
              <td> Unidades</td>
              <td> Precio </td>
              <td className="th-col-100"> Total </td>
            </tr>
          </thead>
          <tbody class="tbody-ventas">
            {dataVentas.map((venta) => (
              <tr>
                <td>{venta.fecha}</td>
                <td>{venta._id}</td>
                <td>{venta.productos.map(producto => (<img src={producto.imagen} class="img-ventas" alt="producto"></img>))}</td>
                <td>{venta.productos.map(producto => (<ul>{producto.nombre}</ul>))}</td>
                <td>{venta.productos.map(producto => (<ul>{producto.cantidad}</ul>))}</td>
                <td>{venta.productos.map(producto => (<ul>$ {producto.precio}</ul>))}</td>
                <td>$ {venta.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </center>
  );
};
/*
export class Ventas extends Component {
  render() {
    return (
      <center>
        <div class="contenedor-ventas">
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
                <img class="img-ventas" src={img_1} alt="producto"></img>
              </td>
              <td>Gargantilla multicolor</td>
              <td>1</td>
              <td>350.000</td>
            </tr>
            <tr>
              <td>0153</td>
              <td>
                <img class="img-ventas" src={img_2} alt="producto"></img>
              </td>
              <td>Bolso Grande</td>
              <td>1</td>
              <td>350.000</td>
            </tr>
            <tr>
              <td>0153</td>
              <td>
                <img class="img-ventas" src={img_3} alt="producto"></img>
              </td>
              <td>Sombrero Fucsia</td>
              <td>1</td>
              <td>350.000</td>
            </tr>
            <tr>
              <td>0153</td>
              <td>
                <img class="img-ventas" src={img_4} alt="producto"></img>
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
}*/