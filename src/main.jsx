// src/main.jsx
// Third-party CSS goes first so the project's own styles (App.css, index.css) override it.
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
