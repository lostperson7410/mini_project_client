import React, { useEffect , useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShowCard from '../ShowCard'
import CreateCard from '../CreateCard'
import MenuCarousol from './fixmenu/menu1'
import { Container,Row,Col, Alert} from 'reactstrap';
import{Route,Switch, Link } from 'react-router-dom'

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function Menu(){

  
  const [open, setOpen] = React.useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


    return(
      <div class='body' className = 'aqua-gradient'>
        <br/>
        <br/>
          <div className="CenterCarousel">
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
            <Button variant="outlined" class="btn btn-success" color="primary" onClick={handleClickOpen}>
            Confirm Order
            </Button>
            <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
             >
        <DialogTitle id="alert-dialog-title">{"Your Order has been submit"}</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
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
