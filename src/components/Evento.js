import React from 'react';
import image from '../eventos.jpg'
const Evento = ({evento}) => {
    let {text}=evento.description
    if(text){
        if(text.length>280){
            text=text.substr(0,280);
        }
    }else{
        text='Mas informacion en el boton de abajo';
    }
    return ( 
     
        <div className='uk-card uk-card-default uk-width-1-3 uk-margin' uk-margin="true">
            <div className='uk-card-media-top'>
                {evento.logo?
                <img src={evento.logo.url} alt={evento.name}/>
                :<img src={image} alt={evento.name}/>}
            </div>
            <div className='uk-card-body'>
               
                <h3 className='uk-card-title'>{evento.name.text}</h3>
                <p>{text}</p>
            </div>
            <div className='uk-card-footer'>
                <a href={evento.url} 
                target='_blank'
                rel='noopener noreferrer'
                className='uk-button uk-button-secondary'>
                    Mas informacion
                </a>
            </div>
        </div>
       
     );
}
 
export default Evento;