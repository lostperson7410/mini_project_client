import React, { Component, useState, useEffect } from 'react';
import firebase from 'firebase';
import {firestore} from '../../../../../../index'
import MenuCards from '../Menucard'
import 'bootstrap/dist/css/bootstrap.min.css';

import Omlet from '../images/Omlet.jpg'
import './Img.css'


//redux
import{NumberAction} from '../../../../../redux/Number/action';
import{useSelector,useDispatch} from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Row, Col,} from 'reactstrap';

import {  MDBView,MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,MDBCloseIcon,MDBBtn, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdbreact';


//route

import{Route,Switch, Link } from 'react-router-dom'



function App(){
  

  const[Menu1,setMenu1]= useState([
    { number:1,id: 1,name:"do homework",text:"Hello"},
  ])
  
  const name = "Omlet"
  const[text,settext] = useState('')

  
  const actions = bindActionCreators(NumberAction,useDispatch());
  const number = useSelector(state => state.number)


  useEffect(() =>{
    retriverData()
  },[])

  const retriverData = () => {
    firestore.collection("Menu1").onSnapshot((snapshot)=>{
      console.log(snapshot.docs)
      let myMenu1 =snapshot.docs.map( d => {
        const {name,text,number} = d.data()
        console.log(name,text,number)
        return{name,text,number}
      })
      setMenu1(myMenu1)
    })
  } 




  const addOmlet  = () => {
    // let id =(Menu1.length === 0)?1:Menu1[Menu1.length-1].id + 1
    // let number =(Menu1.length === 0)?1:Menu1[Menu1.length-1].id + 1
    firestore.collection("Menu1").doc("omlet").set({name,text,number});
    actions.INCREMENT(number) 
  }

  const editOmlet = (id) => {
    firestore.collection("Menu1").doc(id + '').set({id,name,text,number})
}

const deleteOmlet = (id) =>{
  firestore.collection("Menu1").doc(id + '').delete()
  actions.DECREMENT(number)
}


 const renderOmlet= () =>{
  if( Menu1&&Menu1.length)
  return(
    Menu1.map((Menu1,index)=>{
      return(
      <MenuCards key={index} Menu1={Menu1} deleteMenu1={deleteOmlet} editCardPost={editOmlet} />
       )
     }
    )
  )
  else
  return(<li>No CardPost</li>)
}

return (
        <div>
        <MDBCol style={{ maxWidth: "22rem" }}>
        <MDBCard>
        <MDBCardImage className="fixOmlet" src={Omlet}  />
            <MDBCardBody>
            <MDBCardTitle>ไข่เจียว: 50 Baht</MDBCardTitle>
            <Link class="btn btn-success" onClick={addOmlet}>Add to menu</Link>
            </MDBCardBody>
        </MDBCard>
        </MDBCol>
       
        </div>

    );
}

export default App;


/*
<div>
<MDBCol style={{ maxWidth: "22rem" }}>
  <MDBCard>
  <MDBCardImage className="img-fluid" src={Omlet}  />
    <MDBCardBody>
      <MDBCardTitle>Omlet</MDBCardTitle>
      <Link to="/MenuPage" class="btn btn-success">MenuPage</Link>
    </MDBCardBody>
  </MDBCard>
</MDBCol>
       <div>
  
     </div>
</div>

*/