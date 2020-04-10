import React, { useEffect , useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShowCard from '../ShowCard'
import CreateCard from '../CreateCard'
import Omlet from './fixmenu/menu1'
import { Container,Row,Col} from 'reactstrap';

function Menu(){
    return(
      <div class='body' className = 'aqua-gradient'>
        <br/>
        <br/>
          <div class='Container'>
            <Row>
              <Omlet/>
            </Row>
          </div>
      </div>  
    );
}
export default Menu;
