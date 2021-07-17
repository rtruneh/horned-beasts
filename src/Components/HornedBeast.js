import React from 'react';
import Black from '../img/hb2.jpg';

function HornedBeast(props){
    return(
        <>
        <h2>{props.title}</h2>
        <img height = '500px' src={props.imgurl} alt="Goat" title="Goat"/>
        <p>{props.desc}</p>
        </>
    )
}

export default HornedBeast;