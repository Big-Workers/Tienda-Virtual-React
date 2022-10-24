import '../styles/styleHeader.css';
import usuario from '../resources/usuario.png';
import logo from '../resources/logo-1.png';
import carrito from '../resources/carrito-de-compras.png';
import productos from '../resources/paquete.png';
import home from '../resources/casa-de-perro.png';

export function Header () {
    return (
        <nav className="header">
            <a href="#"><img src={logo} className="logo" alt="logo" /></a>
            <div className="divFondoIconos" id="fondoUsuario">
                <a href="#"><img src={usuario} className="iconosHeader" alt="Perfil"/></a>
            </div>
            <div className="divFondoIconos" id="fondoCarrito">
                <a href="#"><img src={carrito} className="iconosHeader" alt="CarritoCompras"/></a>
            </div>
            <div className="divFondoIconos" id="fondoProductos">
                <a href="#"><img src={productos} className="iconosHeader" alt="Productos"/></a>
            </div>        
            <div className="divFondoIconos" id="fondoProductos">
                <a href="#"><img src={home} className="iconosHeader" alt="Home"/></a>
            </div> 
        </nav>

    )
}