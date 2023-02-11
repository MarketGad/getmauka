import Post from "../Post";
import {useEffect, useState} from "react";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button } from "@mui/material";

export default function IndexPage() {
  const [posts,setPosts] = useState([]);
  useEffect(() => {
    fetch('/post').then(response => {
      response.json().then(posts => {
        setPosts(posts);
      });
    });
  }, []);
  const title1= "expo";

  return (
    <>
    <div style={{backgroundColor:"black", marginTop:"-50px", marginBottom:"30px", paddingTop:"20px", height:"70px"}}>

    <Button sx={{width:"10%", height:30,backgroundColor:"white",marginLeft:"7%",border: "1px solid", borderColor:"black",borderRadius:"15px",fontFamily:"Poppins",fontSize:"14px",fontStyle:"bold", color:"black","&:hover":{backgroundColor:"#125B15", color:"yellow"}}}  >ALL</Button>
    <Button sx={{width:"10%", height:30,backgroundColor:"white", marginLeft:"5%", border: "1px solid", borderColor:"black", borderRadius:"15px",fontFamily:"Poppins",fontSize:"14px",fontStyle:"bold", color:"black","&:hover":{backgroundColor:"#125B15", color:"yellow"}}}>COMPETION</Button>
      <Button sx={{width:"10%", height:30,backgroundColor:"white",marginLeft:"5%",border: "1px solid", borderColor:"black",borderRadius:"15px",fontFamily:"Poppins",fontSize:"14px",fontStyle:"bold", color:"black","&:hover":{backgroundColor:"#125B15", color:"yellow"}}}>EVENTS</Button>
      <Button sx={{width:"10%", height:30,backgroundColor:"white",marginLeft:"5%",border: "1px solid", borderColor:"black", borderRadius:"15px",fontFamily:"Poppins",fontSize:"14px",fontStyle:"bold", color:"black","&:hover":{backgroundColor:"#125B15", color:"yellow"}}}>WORKSHOPS</Button>
      <Button sx={{width:"10%", height:30,backgroundColor:"white",marginLeft:"5%",border: "1px solid", borderColor:"black", borderRadius:"15px",fontFamily:"Poppins",fontSize:"14px",fontStyle:"bold", color:"black","&:hover":{backgroundColor:"#125B15", color:"yellow"}}}>PRODUCT </Button>
      <Button sx={{width:"10%", height:30,backgroundColor:"white",marginLeft:"5%",border: "1px solid", borderColor:"black",borderRadius:"15px",fontFamily:"Poppins",fontSize:"14px",fontStyle:"bold", color:"black","&:hover":{backgroundColor:"#125B15", color:"yellow"}}}>HACKATHONS</Button>
    </div>
   <Box sx={{ flexGrow: 2 , backgroundColor:"#F8F8F8",marginLeft:"50px"}}>
   <Grid container spacing={3} >
      {posts.length > 0 && posts.map(post => ( 
        
          <Grid item sm={6}  >
        
          <Post {...post} {...title1} />
          </Grid>
    
          
          ))}
    </Grid>
    </Box>
    

  <br />  <br /> <br />
  
    </>
  );
}