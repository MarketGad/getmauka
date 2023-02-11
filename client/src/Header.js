import {Link} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "./UserContext";
import Button from '@mui/material/Button';
import IMAGE1 from './images/LL.png'

import * as React from 'react';
import { useNavigate } from "react-router-dom";

export default function Header() {
  const history = useNavigate();
  const {setUserInfo,userInfo} = useContext(UserContext);
  useEffect(() => {
    fetch('/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch('/logout', {
      credentials: 'include',
      method: 'POST',
    });
    history('/');
    setUserInfo(null);
  }

  const username = userInfo?.username;



  const SS = { backgroundColor:"#FFF500", color:"black", "&:hover":{color:"black", backgroundColor:"#FFF500"},marginLeft:"25%"}
  const LL ={width:"95px", marginRight:"4%","&:hover":{color:"white", backgroundColor:"blue"},};
  return (
    <header style={{backgroundColor:"#125B15", marginTop:0, padding:0, marginLeft:0,marginRight:0, width:"1263px", height:"60px"  }}>
    <Link to="/"><img src={IMAGE1} alt="logo"  style={{width:"27%", marginLeft:"5%"}} /></Link> 
        {username && (
          <>
            
            <Button variant="contained" component={Link} to="/create" sx={SS}>Publish</Button>
            <Button variant="contained" onClick={logout} sx={LL}>Logout</Button>
          </>
        )}
        {!username && (
          <>
            <Button variant="contained" component={Link} to="/login" sx={SS}>Login</Button>
            <Button variant="contained" component={Link} to="/register" sx={LL}>Register</Button>
            
          </>
        )}
    </header>
   
  );
}
