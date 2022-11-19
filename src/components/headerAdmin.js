import '../styles/header.css';
import logo from '../resources/logo-1.png';
import nuevo from '../resources/nuevo.png';
import visualizar from '../resources/paquete.png';
import ventas from '../resources/ventas.png';

export function HeaderAdmin () {
    return (
        <nav className="header">
            <a href="#"><img src={logo} className="logo" alt="logo" /></a>
            <div className="divFondoIconos">
                <a href="/Admin-Ventas"><img src={ventas} className="iconosHeader" alt="Productos"/></a>
            </div>
            <div className="divFondoIconos">
                <a href="/Admin-Productos"><img src={visualizar} className="iconosHeader" alt="Productos"/></a>
            </div>
            <div className="divFondoIconos">
                <a href="/Admin-Nuevo-Producto"><img src={nuevo} className="iconosHeader" alt="Productos"/></a>
            </div>
        </nav>

    )
}