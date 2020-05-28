import React, {useState} from 'react';
import ReactCardFlip from 'react-card-flip';
import '../Styles/Carta.css';

const FlipCardConHooks = (props) => {
    
    const [isFlipped, setIsFlipped] = useState(false)

    return(
            <ReactCardFlip isFlipped={props.estaSiendoComparada || props.fueAdivinada} flipDirection="vertical">
                <div className="FrontCard" onClick={() => {setIsFlipped(!isFlipped); props.seleccionarCarta()}}>        
                    
                </div>
                <div className="BackCard" onClick={() => setIsFlipped(!isFlipped)}>          
                    <i className={`fa ${props.icono} fa-6x`}/>
                </div>
            </ReactCardFlip>
        )
}

export default FlipCardConHooks;