import React from 'react';
import './character.css'

const Character = () => {
    //NEED TO REFACTOR TO USE PARENT-CHILD PROPERTIES HELPFUL FOR ANIMATION
    return(
        <body>
            {/* CHARACTER */}
            <div className='container-column'>
                {/* FACE */}
                <div className='face'>
                    {/* EYE BROWS */}
                    <div className='container-row'>
                        <div className='left-brow'></div>
                        <div className='right-brow'></div>
                    </div>
                    {/* EYES */}
                    <div className='container-row'>
                        <div className='left-eye container-column'>
                            <div className='iris'></div>
                        </div>
                        <div className='right-eye container-column'>
                            <div className='iris'></div>
                        </div>
                    </div>
                    {/* EYE LIDS */}
                    <div className='container-row'>
                        <div className='lid'></div>
                        <div className='lid'></div>
                    </div>
                    {/* NOSE */}
                    <div className='container-row'>
                        <div className='nose3'></div>
                    </div>
                    {/* MOUTH */}
                    <div className='container-column'>
                        <div className='upper-lip'>
                        <svg id="lip" data-name="lip" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 326.18 77.74"><path class="lip" d="M139.62,269c22.08-12.75,47.2-19.94,72.54-22.1,31.64-2.68,63.64,2.29,93.9,11.94,22.11,7.06,43.89,16.69,67.07,17.69,20.84.89,41.41-5.34,60.41-13.93,2.31-1.05,5.13-2.09,7.22-.67,2.73,1.87,1.78,6.06.47,9.1a263.1,263.1,0,0,1-26.16,47,14.79,14.79,0,0,1-4,4.32c-2.41,1.52-5.44,1.57-8.3,1.57l-286.14-.12C115.25,299.93,118,281.46,139.62,269Z" transform="translate(-116.33 -246.16)"/></svg>
                        </div>
                        <div class='lower-lip'></div>
                    </div>
                </div>
                {/* EARS */}
                <div className='container-row'>
                    <div className='left-ear'></div>
                    <div className='right-ear'></div>
                </div>
                {/* NECK */}
                <div className='container-row'>
                    <div className='neck'></div>
                </div>
                {/* HAIR */}
                <div className='container-column'>
                    <div className='hair-back'></div>
                    <div className='hair-front container-row'>
                        <div className='hair-front-left'></div>
                        <div className='hair-front-right'></div>
                    </div>
                    <div className='bangs'></div>
                </div>
                {/* CLOTHES */}
                <div className='tie'>
                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 249.61 224.85"><path class="cls-2" d="M414.71,339.76,351.47,523.45,290.24,403,406.81,298.61Zm-249.61,0,63.58,183.69L290.24,403,173,298.61Z" transform="translate(-165.1 -298.61)"/></svg>
                </div>
                <div className='shirt'></div>
                {/* DESK */}
                <div className='desk container-column'>
                    <div className='desk-icon'></div>
                </div>
                {/* EYE HIGHLIGHTS */}
                <div className='highlights container-row'>
                    <div className='highlight-left'></div>
                    <div className='highlight-right'></div>
                </div>
            </div>
        </body>
    )
}

export default Character;