  
import React from 'react';

import HornedBeast from './HornedBeast';
// import Black from '../img/hb2.jpg';
// import Gazelle from '../img/hb1.jpg';

import {animalData} from '../data';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';


function Main() {
    return (
      <div>
        <Container>
          <Row>
            {animalData.map((data, key) => {
              return(
                //{number of column spaces}
                <Col xs={12} md={6} lg={4}>
                  <div key={key}>
                      <HornedBeast
                      key={key}
                      image_url={data.image_url}
                      title={data.title}
                      description={data.description}
                      />
                    
                  </div>
                </Col>
              );
            })};
          </Row>
        </Container>
      </div>
        );
      }

      
    export default Main;
