import shuffle from 'lodash.shuffle';

const NUMERO_DE_CARTAS = 20;

const FontAwesomeClasses = ["fa-500px", "fa-address-book", "fa-address-book-o", "fa-address-card", "fa-address-card-o", "fa-adjust", "fa-adn", "fa-align-center", 
"fa-align-justify", "fa-align-left", "fa-align-right", "fa-amazon", "fa-ambulance", "fa-american-sign-language-interpreting", "fa-anchor", 
"fa-android", "fa-angellist", "fa-angle-double-down", "fa-angle-double-left", "fa-angle-double-right", "fa-angle-double-up", 
"fa-angle-down", "fa-angle-left", "fa-angle-right", "fa-angle-up", "fa-apple", "fa-archive", "fa-area-chart", "fa-arrow-circle-down", 
"fa-arrow-circle-left", "fa-arrow-circle-o-down", "fa-arrow-circle-o-left", "fa-arrow-circle-o-right", "fa-arrow-circle-o-up", 
"fa-arrow-circle-right", "fa-arrow-circle-up", "fa-arrow-down", "fa-arrow-left", "fa-arrow-right", "fa-arrow-up", "fa-arrows", 
"fa-arrows-alt", "fa-arrows-h", "fa-arrows-v", "fa-asl-interpreting", "fa-assistive-listening-systems", "fa-asterisk", "fa-at", 
"fa-audio-description", "fa-automobile", "fa-backward", "fa-balance-scale", "fa-ban", "fa-bandcamp", "fa-bank", "fa-bar-chart", 
"fa-bar-chart-o", "fa-barcode", "fa-bars", "fa-bath", "fa-bathtub", "fa-battery", "fa-battery-0", "fa-battery-1", "fa-battery-2", 
"fa-battery-3", "fa-battery-4", "fa-battery-empty", "fa-battery-full", "fa-smile-o", "fa-snapchat", "fa-snapchat-ghost", 
"fa-snapchat-square", "fa-snowflake-o", "fa-soccer-ball-o", "fa-sort", "fa-sort-alpha-asc", "fa-sort-alpha-desc", "fa-sort-amount-asc", 
"fa-sort-amount-desc", "fa-sort-asc", "fa-sort-desc", "fa-sort-down", "fa-sort-numeric-asc", "fa-sort-numeric-desc", "fa-sort-up", 
"fa-soundcloud", "fa-space-shuttle", "fa-spinner", "fa-spoon", "fa-spotify", "fa-square", "fa-square-o", "fa-stack-exchange", 
"fa-stack-overflow", "fa-star"];

export default () => {
    let Cartas = [];
    
    while(Cartas.length < NUMERO_DE_CARTAS)
    {
        const index = Math.floor(Math.random() * FontAwesomeClasses.length) //Crea un Indice Aleatorio entre todo el Array de FontAwesomeClasses
        const carta = {
            icono: FontAwesomeClasses.splice(index, 1)[0],      //Objeto con las caracteristicas de la carta. Extrae del Array una clase
            FueAdivinada: false,
        };
    
        Cartas.push(carta);     //Agregando carta en el Array
        Cartas.push({...carta});    //Agregando carta identica en el Array
    };

    return shuffle(Cartas);
};