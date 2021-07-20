  
import React from 'react';

// import HornedBeast from './HornedBeast';
// import Black from '../img/hb2.jpg';
// import Gazelle from '../img/hb1.jpg';

import {animalData} from '../data';

export const Main = () =>{
    return {
        <>
            {animalData.map((data, key) => {
          return(
          <div key={key}>
              {data.image_url + 
              " , " + 
              data.title + 
              "," + 
              data.description})
          </div>
    };
})}
</>
);
};

        /* <HornedBeast 
        //   title="Horned Animal" 
        //   imgurl={Black} 
        //   desc="black beauty"
        title="Horned Animal" 
          image_url={Black} 
          description="black beauty"
        />
        <HornedBeast 
          title="Gazelle" 
          imgurl={Gazelle} 
        />
      */
  

export default Main;

