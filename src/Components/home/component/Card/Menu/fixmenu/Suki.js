import React, { Component, useState, useEffect } from 'react';
import firebase from 'firebase';
import {firestore} from '../../../../../../index'
import Cards from '../../Cards'
import 'bootstrap/dist/css/bootstrap.min.css';

import Suki from '../images/Suki.jpg'
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
  
  const[name,setName] = useState('')

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
        const {id,name,text,number} = d.data()
        console.log(id,name,text,number)
        return{id,name,text,number}
      })
      setMenu1(myMenu1)
    })
  } 




  const addMenu1  = () => {
    let id =(Menu1.length === 0)?1:Menu1[Menu1.length-1].id + 1
    let number =(Menu1.length === 0)?1:Menu1[Menu1.length-1].id + 1
    firestore.collection("Menu1").doc(id+'').set({id,name,text,number});
    actions.INCREMENT(number) 
  }

  const editMenu1 = (id) => {
    firestore.collection("Menu1").doc(id + '').set({id,name,text,number})
}

const deleteMenu1 = (id) =>{
  firestore.collection("Menu1").doc(id + '').delete()
  actions.DECREMENT(number)
}


 const renderMenu1= () =>{
  if( Menu1&&Menu1.length)
  return(
    Menu1.map((Menu1,index)=>{
      return(
      <Cards key={index} Menu1={Menu1} deleteMenu1={deleteMenu1} editCardPost={editMenu1} />
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
        <MDBCardImage className="img-fluid" src={Suki}  />
            <MDBCardBody>
            <MDBCardTitle>สุกกี้: 50 Baht</MDBCardTitle>
            <Link to="/MenuPage" class="btn btn-success">MenuPage</Link>
            </MDBCardBody>
        </MDBCard>
        </MDBCol>

            <div>
        
            </div>
        </div>

    );
}

export default App;

