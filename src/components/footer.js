import '../styles/footer.css';
import whatsapp from '../resources/whatsapp.png';

export function Footer() {
    return (
        <div className="divFooter">
            <p className="texto">
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src={whatsapp} className="botonWhatsapp" alt="ContactoWhatsapp" />
                </a>
                @Copyright 2022 Big Workers.
                <br></br>
                Diseño y desarrollo: <a className="enlace" href="#" target="_blank" rel="noopener noreferrer">
                                        Big Workers Team
                                     </a>
                
            </p>
             
        </div>
    )
}
