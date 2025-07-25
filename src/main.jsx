// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Importar Bootstrap CSS (si no lo tienes ya aquí o en App.jsx)
import 'bootstrap/dist/css/bootstrap.min.css';

// Importar AOS y su CSS
import AOS from 'aos';
import 'aos/dist/aos.css'; // La hoja de estilos de AOS

// Inicializar AOS
AOS.init({
  // Opciones globales (opcionales)
  duration: 1000, // Duración de la animación en ms
  once: true,     // Si la animación debe ocurrir solo una vez al bajar
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);