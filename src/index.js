import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals'; 
//import { Profile } from './components/perfil';


const express = require('express');

// Inicializaciones
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);
// Middlewares

// Globar Variables

// Routes

// Static Files

// Server is listenning
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
<<<<<<< HEAD
reportWebVitals();

=======
//reportWebVitals();
>>>>>>> 4d9d77093c42e0477f07dc8040a93d52e50e241c
