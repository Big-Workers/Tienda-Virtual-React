import '../styles/styleHeader.css';
import cliente from '..//resources/usuario.png';

export function Header () {
    return (
        <>
            <div id="divHeader">
                <h1>ARTESANIA</h1>
                <div id="divUsuario">
                    <img src={cliente} className="Logo-cliente" alt="logoUsuario" />
                </div>
            </div>
        </>

    )
}