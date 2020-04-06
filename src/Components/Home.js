import React, { useEffect , useState} from 'react';
import{useSelector,useDispatch} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import HeaderSection from './home/component/HeaderSection';
import { bindActionCreators } from 'redux';
import{NumberAction} from './redux/Number/action';
import Card from './home/component/Card/Card'
/*
<p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
<img id="photo" className="pic" src={firebase.auth().currentUser.photoURL}/>
<button onClick={() => firebase.auth().signOut()}>Sign-out</button>*/


function Home() {


  const actions = bindActionCreators(NumberAction,useDispatch());

  const number = useSelector(state => state.number)


  useEffect(()=>{
    console.log(number)
  },[])

  return ( //ใส่หน้าบ้าน
    <div>
        <HeaderSection title ='Wellcome to Cather'/>
        <br></br>
      <Container>
      <Row>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </Row>
      </Container>
    </div>
  );
}

export default Home;

/*
      <Container>
        <Row className = "ColortCol2">
          <div>
              <h2>Count:{number}</h2>
            <h2>
              <button onClick={() => actions.INCREMENT(number)}>INCREMENT</button>
              <button onClick={() => actions.DECREMENT(number)}>DECREMENT</button>
            </h2>
          </div>
        </Row>
      </Container> 
*/