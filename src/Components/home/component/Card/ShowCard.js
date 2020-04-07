import React, { Component, useState, useEffect } from 'react';
import firebase from 'firebase';
import {firestore} from '../../../../index'
import Cards from './Cards'



function App(){
  

  const[CardPost,setCardPost]= useState([
    { id: 1,name:"do homewaork"},
  ])
  

  useEffect(() =>{
    retriverData()
  },[])

  const retriverData = () => {
    firestore.collection("CardPost").onSnapshot((snapshot)=>{
      console.log(snapshot.docs)
      let myCardPost =snapshot.docs.map(d => {
        const {id,name} = d.data()
        console.log(id,name)
        return{id,name}
      })
      setCardPost(myCardPost)
    })
  } 
  const renderCardPost = () =>{
    if( CardPost&&CardPost.length)
    return(
      CardPost.map((CardPost,index)=>{
        return(
        <Cards key={index} CardPost={CardPost} />
         )
       }
      )
    )
    else
    return(<li>No CardPost</li>)
  }

  return(
    <div>
      <h1>
        <ul style={{display:'flex',listStyle:'none'}}>{renderCardPost()}</ul>
      </h1>
    </div>
  );
}

export default App;