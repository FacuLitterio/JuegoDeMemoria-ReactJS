import React from 'react';
import '../Styles/App.css';
import BarraDeNavegacion from './BarraDeNavegacion';
import Tablero from './Tablero';
import CrearBaraja from './CrearBaraja';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      Baraja: CrearBaraja(),
      ParejaSeleccionada: [],
      EstaComparando: false,
      numeroDeIntentos: 0
    }
  };

  render(){  
    return(
      <div>
          <BarraDeNavegacion numeroDeIntentos={this.state.numeroDeIntentos} ReiniciarJuego={() => this.ReiniciarJuego()}/>
          <Tablero baraja={this.state.Baraja} ParejaSeleccionada={this.state.ParejaSeleccionada} seleccionarCarta={(carta) => this.seleccionarCarta(carta)}/>
      </div>
      );
  };

  seleccionarCarta(carta){
    if(this.state.EstaComparando || this.state.ParejaSeleccionada.indexOf(carta) > -1 || carta.fueAdivinada){
      return;
    }
    
    const ParejaSeleccionada = [...this.state.ParejaSeleccionada, carta];
    this.setState({
      ParejaSeleccionada
    })
  
    if(ParejaSeleccionada.length===2){
      this.setState({EstaComparando: true})
      
      setTimeout(() => {
        const [PrimeraCarta, SegundaCarta] = ParejaSeleccionada;
        let baraja = this.state.Baraja;

        if(PrimeraCarta.icono === SegundaCarta.icono){
          baraja = baraja.map((carta) => {
            if(carta.icono !== PrimeraCarta.icono){
              return carta;
            }
            return {...carta, fueAdivinada: true};
          })
        }

        this.setState({ParejaSeleccionada: [], EstaComparando: false, Baraja: baraja, numeroDeIntentos: this.state.numeroDeIntentos+1})

      }, 1000)
    }
  }

  ReiniciarJuego(){
    this.setState({Baraja: CrearBaraja(), ParejaSeleccionada: [], EstaComparando: false, numeroDeIntentos: 0})
  }

};

export default App;
