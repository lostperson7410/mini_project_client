import React from 'react';
import logo from './images/Cather1.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import './HeaderSection.css'

const HeaderSection = props => {

    return(
        <div>
                <Col>
                <img src={logo} class="img-thumbnail" className ="ImgWH" />
                 {props.title}

                </Col>
            <Container>

            </Container>
            
        </div>
    )

}
export default HeaderSection;