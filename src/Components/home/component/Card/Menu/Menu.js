import React, { useEffect , useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShowCard from '../ShowCard'
import CreateCard from '../CreateCard'

function Menu(){
    return(
      <div class='body' className = 'aqua-gradient'>
          <h1>Menu </h1>
        <CreateCard/>

        <ShowCard/>
      </div>  
    );
}
export default Menu;
