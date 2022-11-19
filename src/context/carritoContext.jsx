import { createContext, useEffect, useState } from "react";
import axios from "axios";

//creamos el context, se le puede pasar un valor inicial
const carritoContext = createContext();

export const CarritoProveedor = ({ children }) => {
    //creamos un estado para el carrito
    const [carritoItems, setCarritoItems] = useState([]);
    const [productos, setProductos] = useState([]);
/*
    const getProductos = async () => {
        await axios
            .get("http://localhost:5000/productos")
            .then(({ data }) => setProductos(data.productos));
    };
*/
    function getProductos() {
        fetch("http://localhost:5000/productosStock")
          .then((resp) => resp.json())
          .then((resp) => {
            return setProductos(resp)
            
          })
          .catch((err) => console.log(err));
          
      };

    const getProductosCarrito = async () => {
        return await axios
            .get("http://localhost:5000/productosCarrito")
            .then(({ data }) => setCarritoItems(data.getProductosCarrito))
            .catch((error) => console.error(error));
    };

    //cada vez que se actualice el carrito seteamos el local storage para guardar los productos
    useEffect(() => {
        getProductos();
        getProductosCarrito();
    }, []);

    const addProductosCarrito = async (producto) => {
        const { nombre, imagen, precio } = producto;

        await axios.post("http://localhost:5000/productosCarrito", { nombre, imagen, precio });

        getProductos();
        getProductosCarrito();
    };

    const editarItemCarrito = async (id, query, cantidad) => {
        if (query === "del" && cantidad === 1) {
            await axios
                .delete(`http://localhost:5000/productosCarrito/${id}`)
                .then(({ data }) => console.log(data));
        } else {
            await axios
                .put(`http://localhost:5000/productosCarrito/${id}?query=${query}`, {
                    cantidad,
                })
                .then(({ data }) => console.log(data));
        }
        getProductos();
        getProductosCarrito();
    };

    return (
        //envolvemos el children con el proveedor y le pasamos un objeto con las propiedades que necesitamos por value
        <carritoContext.Provider
        value={{carritoItems, productos, addProductosCarrito, editarItemCarrito}}
        >
            {children}
        </carritoContext.Provider>
    );
};

export default carritoContext;