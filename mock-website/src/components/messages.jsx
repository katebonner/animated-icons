import React from 'react';
import './messages.css';

const Messages = () => {
    return(
        <>
            <div className='container-column'>
                <div className='question container-column'>
                    <p>¿Puedo abrir una cuenta sin un número de seguro social?</p>
                </div>
                <div className='response bold container-column'>
                    <p> ¡sí! solo es necesario presentar una identificación oficial y un comprobante de domicilio.</p>
                </div>

            </div>
        </>
    )
}

export default Messages;