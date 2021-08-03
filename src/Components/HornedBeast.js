import React from 'react';
import {BsFillHeartFill} from 'react-icons/bs';
import Button from 'react-bootstrap/Button';
import {Container, Row, Col} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import SelectedBeast from './SelectedBeast';

// import Black from '../img/hb2.jpg';
//another way to import could also use import/from
//useState: just render one piece of code
const { useState } = React;

function HornedBeast({image_url, title, description}){
    //function to give the button a job
    const handleClick = () =>{
        setCount(count+1);
        setModalOpen(!modalOpen);
    };
    //usestate(sets beg value)
    const [count, setCount] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);
        
    return (
        <>
        <Container>
            {/* to hold image */}
            <Row>
                <Col xs={12}>
                    <Button style={{color: "black"}} className="bg-transparent border-0 shadow-none">
                        <Image 
                            src={image_url} 
                            alt={title}
                            onClick={handleClick}
                            className="img-fluid"/>
                    </Button>
                </Col>

                <Col xs={12}>
                    <Col>
                        <BsFillHeartFill/>
                    </Col>
                    <Col>
                        {count}
                    </Col>
                </Col>

            </Row>
            {/* to hold title/description below image */}
            <Row>
                {/* xs allows you to tell it how to tell it how to sit if you don't want it side by side */}
                <Col xs={12}>
                    <h2>
                        {title}
                    </h2>
                </Col>

                <Col xs={12}>
                    <p>
                        {description}
                    </p>
                </Col>
                <Col>
                    <SelectedBeast
                    modalOpen={modalOpen}
                    setModalOpen={setModalOpen}
                    image_url={image_url}
                    />
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default HornedBeast;