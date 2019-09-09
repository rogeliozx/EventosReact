import React from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListaEventos from "./components/ListaEventos";
//contentxs
import CagetoriasProvider from "./context/CategoriasContext";
import EventosProvider from "./context/EventosContext";
function App() {
  return (
    <EventosProvider>
      <CagetoriasProvider>
        <Header />
        <div className="uk-container">
          <Formulario />
          <ListaEventos/>
        </div>
      </CagetoriasProvider>
    </EventosProvider>
  );
}

export default App;
