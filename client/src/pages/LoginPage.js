import {useContext, useState} from "react";
import {Navigate} from "react-router-dom";
import {UserContext} from "../UserContext";
import React from 'react';
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
}
from 'mdb-react-ui-kit';
import { useNavigate } from "react-router-dom";
export default function LoginPage() {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const history = useNavigate();
  const [redirect,setRedirect] = useState(false);
  const {setUserInfo} = useContext(UserContext);
  async function login(ev) {
    ev.preventDefault();
    const response = await fetch('/login', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {'Content-Type':'application/json'},
      credentials: 'include',
    });
    if (response.ok) {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
        setRedirect(true);
      });
      history('/');
    } else {
      alert('wrong credentials');
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />
  }
  return (
    <>
    <form onSubmit={login}>
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50" >

      <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='text'  value={username}
             onChange={ev => setUsername(ev.target.value)} />
      <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' value={password}
             onChange={ev => setPassword(ev.target.value)}/>

      <div className="d-flex justify-content-between mx-3 mb-4">
        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
        <a href="!#">Forgot password?</a>
      </div>

      <MDBBtn className="mb-4" >Sign in</MDBBtn>

    </MDBContainer>
    </form>

</>
  );
}