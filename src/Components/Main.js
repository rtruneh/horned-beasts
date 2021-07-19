  
import React from 'react';

import HornedBeast from './HornedBeast';
import Black from '../img/hb2.jpg';
import Gazelle from '../img/hb1.jpg';

function Main() {
    return (
      <>
        <HornedBeast 
          title="Horned Animal" 
          imgurl={Black} 
          desc="black beauty"
        />
        <HornedBeast 
          title="Gazelle" 
          imgurl={Gazelle} 
        />
      </>
      );
    }

export default Main;

//test//