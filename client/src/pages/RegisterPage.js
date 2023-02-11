import {useState} from "react";
import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

import {useNavigate} from 'react-router-dom';
export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [conpassword, setCPassword] = useState('');

  const history = useNavigate();
  async function register(ev) {
    ev.preventDefault();
    if(ev.password===ev.conpassword){
    const response = await fetch('/register', {
      method: 'POST',
      body: JSON.stringify({username,email,password}),
      headers: {'Content-Type':'application/json'},
    });
 
    if (response.status === 200) {
      history('/login')
    } else {
      alert('registration failed');
    }
  }
  }



  return (
    <>
    <form  onSubmit={register} style={{marginTop:"-70px", marginLeft:"300px"}}>
      
      <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' >
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{maxWidth: '600px'}}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Create an account</h2>
          <MDBInput wrapperClass='mb-4' label='Your Name' size='lg' id='form1' type='text'  value={username}
             onChange={ev => setUsername(ev.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email'  value={email}
             onChange={ev => setEmail(ev.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password' value={password}
             onChange={ev => setPassword(ev.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='Repeat your password' size='lg' id='form4' type='password' value={conpassword}
             onChange={ev => setCPassword(ev.target.value)}/>
      
          <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg' style={{backgroundColor:"#125B15"}}>Register</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
    </form>

</>
  );
}