import React, { Component,createContext } from 'react';

import Axios from 'axios';
//crear el context
const CategoriasContext=createContext();

export const CategoriasConsumer=CategoriasContext.Consumer;

class CategoriasProvider extends Component {
    token='WL6VDX4C3RENPBTFCLKY';
    state = { 
        categorias:[]
     }
    componentDidMount(){
        this.obtenerCategorias();
    }

    obtenerCategorias=async ()=>{
        let url=`https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_MX`;
        let {data}=await Axios.get(url);
        let {categories}=data;
       this.setState({
           categorias:categories
       })
    }

    render() { 
        return (
            <CategoriasContext.Provider
            value={{
                categorias:this.state.categorias
            }}
            >
                {this.props.children}
            </CategoriasContext.Provider>
          );
    }
}
 
export default CategoriasProvider;