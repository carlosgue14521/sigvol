import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// ✅ Estilos globales personalizados
import './styles/global.css'; // aquí puedes mover * {...}, html, body {...}
import './styles/pages.css';  // si tienes estilos compartidos entre páginas

// ✅ Librerías externas
/* import 'bootstrap/dist/css/bootstrap.min.css'; */
import 'bootstrap-icons/font/bootstrap-icons.css';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);