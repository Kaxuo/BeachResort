import React from 'react';
import loadingGif from '../images/gif/loading-arrow.gif'

function Loading() {
    return (
        <div className="loading">
            <h4>Rooms Data Loading ....</h4>
            <img src ={loadingGif} alt=""/>
        </div>
    )
}

export default Loading;
