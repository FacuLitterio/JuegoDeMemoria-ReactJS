import React from 'react';
import '../Styles/Tablero.css';
import FlipCardConHooks from './FlipCardConHooks';

class Tablero extends React.Component{
  
    render(){
        
        return(
            <div className="tablero">
                {this.props.baraja.map((carta, index)=> {
                                                        const estaSiendoComparada = this.props.ParejaSeleccionada.indexOf(carta) > -1;
                                                        return   <FlipCardConHooks 
                                                                    icono={carta.icono} 
                                                                    key={index} 
                                                                    seleccionarCarta={() => this.props.seleccionarCarta(carta)}
                                                                    fueAdivinada={carta.fueAdivinada}
                                                                    estaSiendoComparada={estaSiendoComparada}
                                                                />})}
            </div>    
        );
    };
};

export default Tablero;