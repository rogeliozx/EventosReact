import React, { Component } from "react";
import { CategoriasConsumer } from "../context/CategoriasContext";
import { EventosConsumer } from "../context/EventosContext";

class Formulario extends Component {
  state = {
    nombre: "",
    categoria: ""
  };
  //si agrega evento o categoria
  obtenerDatosEvento = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
        <EventosConsumer>
            {(value)=>{
               
                return(
      <form
      onSubmit={e=>{
          e.preventDefault();
          value.obtenerEventos(this.state)
      }}
      >
        <fieldset className="uk-fieldset uk-margin">
          <legend className="uk-legend uk-text-center">
            Busca tu evento por nombre o categoria
          </legend>
        </fieldset>

        <div className="uk-grid uk-margin">
          <div className="uk-width-1-3 uk-margin" uk-margin="true">
            <input
              name="nombre"
              className="uk-input"
              placeholder="Nombre de evento o Ciudad"
              onChange={this.obtenerDatosEvento}
            />
          </div>

          <div className="uk-width-1-3 uk-margin" uk-margin="true">
            <select
              className="uk-select"
              name="categoria"
              onChange={this.obtenerDatosEvento}
            >
                <option valie=''>--Selecionone Categoria--</option>
              <CategoriasConsumer>
                {value => {
                  return value.categorias.map(categoria => (
                    <option
                      key={categoria.id}
                      value={categoria.id}
                      className="uk-form-select"
                      data-uk-form-select
                    >
                      {categoria.name_localized}
                    </option>
                  ));
                }}
              </CategoriasConsumer>
            </select>
          </div>
          <div className="uk-width-1-3 uk-margin" uk-margin="true">
            <input
              type="submit"
              className="uk-button uk-button-danger"
              value="Busca Eventos"
            />
          </div>
        </div>
      </form>
      )
    }}
      </EventosConsumer>
    );
  }
}

export default Formulario;
