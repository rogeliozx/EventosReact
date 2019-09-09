import React, { Component,createContext } from 'react';
import axios from 'axios';
const EventosContext=createContext();
export const EventosConsumer=EventosContext.Consumer;


class EventosProvider extends Component {
    token='WL6VDX4C3RENPBTFCLKY';
    ordenar='date'
    state = { 
        eventos:[]
     }
    obtenerEventos=async (busqueda)=>{
        
        let url=`https://www.eventbriteapi.com/v3/events/search/?q=${busqueda.nombre}&categories=${busqueda.categoria}&sort_by=${this.ordenar}&token=${this.token}&locale=es_MX`;
        const respuesta=await axios(url);
        const {data}=respuesta;
        const {events}=data;
        
        this.setState({
            eventos:events
        })
    }
    render() { 
        return ( 
            <EventosContext.Provider
            value={{
                eventos:this.state.eventos,
                obtenerEventos:this.obtenerEventos
            }}
            >
                {this.props.children}
            </EventosContext.Provider>
         );
    }
}
 
export default EventosProvider;