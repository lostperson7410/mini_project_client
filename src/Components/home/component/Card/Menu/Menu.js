import React, { useEffect , useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShowCard from '../ShowCard'
import CreateCard from '../CreateCard'
import MenuCarousol from './fixmenu/menu1'
import { Container,Row,Col} from 'reactstrap';
import{Route,Switch, Link } from 'react-router-dom'

function Menu(){
    return(
      <div class='body' className = 'aqua-gradient'>
        <br/>
        <br/>
          <div class='Container'>
            <Row>
              <MenuCarousol/>
            </Row>
          </div>
        <br/>
        <br/>
        <CreateCard/>
        <br/>
        <br/>
        <br/>
        <div className='Center'>
            <Link to="/TotalMenu1" class="btn btn-success" >Confirm</Link>
        </div>
        <br/>
        <br/>
        <ShowCard/>
        <br/>
        <br/>

      </div>  
    );
}
export default Menu;
