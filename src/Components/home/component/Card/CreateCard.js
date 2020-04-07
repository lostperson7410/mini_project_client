import React, { Component, useState, useEffect } from 'react';
import firebase from 'firebase';
import {firestore} from '../../../../index'
import Cards from './Cards'



function App(){
  

  const[CardPost,setCardPost]= useState([
    { id: 1,name:"do homewaork"},
  ])
  
  const[name,setName] = useState('')



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

  const addCardPost  = () => {
    let id =(CardPost.length === 0)?1:CardPost[CardPost.length-1].id + 1
    firestore.collection("CardPost").doc(id+'').set({id,name})
  }


  const renderCardPost = () =>{
    if( CardPost&&CardPost.length)
    return(
      CardPost.map((CardPost,index)=>{
        return(
        <Cards key={index} CardPost={CardPost} deleteCardPost={deleteCardPost} editCardPost={editCardPost}/>
         )
       }
      )
    )
    else
    return(<li>No CardPost</li>)
  }
  const editCardPost = (id) => {
    firestore.collection("CardPost").doc(id + '').set({id,name})
}

const deleteCardPost = (id) =>{
  firestore.collection("CardPost").doc(id + '').delete()
}

  return(
    <div>
      <h1>Todo<br></br>
      <input type="text" name="name" onChange={(e)=> setName(e.target.value)}/> 
      <button onClick={addCardPost}>Add</button>
        <ul style={{display:'flex',listStyle:'none'}}>{renderCardPost()}</ul>
      </h1>
    </div>
  );
}

export default App;