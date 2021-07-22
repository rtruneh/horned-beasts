  
import React from 'react';

import HornedBeast from './HornedBeast';
// import Black from '../img/hb2.jpg';
// import Gazelle from '../img/hb1.jpg';

import {animalData} from '../data';


function Main() {
    return (
      <>
     
        {animalData.map((data, key) => {
            return (<div key = {key}>
                <HornedBeast 
                image_url={data.image_url}
                title={data.title}
                description={data.description}
                />
                </div>
                );
        })}

           {/* <HornedBeast 
          title="Horned Animal" 
          imgurl={Black} 
          desc="black beauty"
        /> */}
        {/* <HornedBeast 
          title="Gazelle" 
          imgurl={Gazelle} 
          desc = "Gazelle"
        /> */}
      </>
      );
    }

export default Main;

      



