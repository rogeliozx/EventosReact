import React from 'react';
import { EventosConsumer } from "../context/EventosContext";
import Evento from './Evento';
const ListaEventos = () => {
    return (
    <div className='uk-grid uk-margin' uk-grid='true'>
       <EventosConsumer>
           {(value)=>{
            return value.eventos.map(evento=>(
                <Evento
                key={evento.id}
                evento={evento}
                />
            ))
           }}
       </EventosConsumer>
       
    </div> );
}
 
export default ListaEventos;