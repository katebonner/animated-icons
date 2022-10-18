import React from 'react';
import Character from './character';
import Messages from './messages';

const Required = () => {
    return(
        <>
            <div class='container-column'>
                <Character></Character>
                <Messages></Messages>
            </div>
        </>
    )
}

export default Required;