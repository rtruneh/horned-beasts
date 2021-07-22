import React from 'react';
// import Black from '../img/hb2.jpg';

function HornedBeast({image_url, title, description}){
    return(
        <>
        <h2>{title}</h2>
        <img height = '500px' src={image_url} alt="Goat" title="Goat"/>
        <p>{description}</p>
        </>
    )
}

export default HornedBeast;