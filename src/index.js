import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import 'bootstrap/dist/css/bootstrap.css'; //Importando Bootstrap 4
import 'font-awesome/css/font-awesome.css'; //Importando Font-Awesome

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

