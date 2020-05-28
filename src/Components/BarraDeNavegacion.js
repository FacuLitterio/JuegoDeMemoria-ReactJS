import React from 'react';
import Logo from '../Logo.png';

const BarraDeNavegacion = (props) => {
    
    return(
            <nav className="navbar navbar-expand-xl navbar-light bg-secondary">  {/* Barra de Navegacion */}
                <div className="container-fluid">
                    
                    <a className="navbar-brand" href="#"><img src={Logo} alt="Logo" width="120" height="70"/></a>            {/* Logo */}
                        
                    <button type="button" className="btn btn-danger navbar-btn btn-lg mr-auto mx-4" onClick={props.ReiniciarJuego}>Reiniciar Juego</button>

                    <div className="h2 mr-auto">Intentos: <button className="btn btn-dark">{props.numeroDeIntentos}</button></div>
                
                </div>
            </nav>
                
    )
}

export default BarraDeNavegacion;