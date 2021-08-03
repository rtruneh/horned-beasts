  
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import {Form} from 'react-bootstrap/Form';
import HornedBeast from './HornedBeast';


function Main({animalData}) {
    return (
      <>
        <Container>
          <Row>
            <Col xs={12}>
              <Form>
                <Form.Group>
                  <Form.Label> Name </Form.label>
                  <Form.Control type="name" placeholder="Name Here"/>
                  <Form.text>Please enter your name</Form.text>
                </Form.Group>
              </Form>
            </Col>
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
      </>
        );
      }

      
    export default Main;
