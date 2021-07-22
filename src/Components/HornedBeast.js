import React from 'react';
// import Black from '../img/hb2.jpg';
//another way to import could also use import/from
//useState: just render one piece of code
const { useState } = React


function HornedBeast({image_url, title, description}){
    //function to give the button a job
    const handleClick = () =>{
        setCount(count+1);
    }
    //usestate(sets beg value)
    const [count, setCount] = useState(0)

    return(
        <>
        <h2>{title}</h2>
        <img height = '500px' src={image_url} alt="Goat" title="Goat"/>
        <p>{description}</p>

        <button onClick={handleClick}> Favorite {count}</button>
        </>
    )
}



export default HornedBeast;