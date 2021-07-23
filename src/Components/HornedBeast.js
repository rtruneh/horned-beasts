import React from 'react';
import {BsFillHeartFill} from 'react-icons/bs';
import Button from 'react-bootstrap/Button';
import {Container, Row, Col} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
// import Black from '../img/hb2.jpg';
//another way to import could also use import/from
//useState: just render one piece of code
const { useState } = React;




function HornedBeast({image_url, title, description}){
    //function to give the button a job
    const handleClick = () =>{
        setCount(count+1);
    }
    //usestate(sets beg value)
    const [count, setCount] = useState(0)
        
    return (
        <Container>
            {/* to hold image */}
            <Row>
                <Col>

                    <Button className="bg-transparent border-0">
                        <Image 
                            src={image_url} 
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

                <Col>
                    <p>
                        {description}
                    </p>
                </Col>
            </Row>

        </Container>
        // <div>
        //     <h2>
        //         {title}
        //     </h2>
        //         <button>
        //             <img onClick = {handleClick} height = "500px" width="500px" src={image_url} alt="Goat" title="Goat"/>
        //             <BsFillHeartFill/>
        // {count}
        // </button>
        // <p> {description}</p></div>
    );
}



      

export default HornedBeast;