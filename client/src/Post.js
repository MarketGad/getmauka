import {formatISO9075} from "date-fns";
import {Link} from "react-router-dom";

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea , CardActions} from '@mui/material';

import Box from '@mui/material/Box';

export default function Post({_id,title,summary,cover,createdAt,author}) {
  return (
    <>

  
    <Card sx={{ display: 'flex' , width: 550}}>
    <CardActionArea  component={Link} to={`/post/${_id}`} sx={{width: 350}}>
    <CardMedia
        component="img"
        sx={{ width: 450 , height: 190}}
        image={'/'+cover}
        alt="Live from space album cover"
      />
       </CardActionArea>
       
      <CardActionArea  component={Link} to={`/post/${_id}`} sx={{marginLeft:"5px"}} >
      <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft:"5px" }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
          {title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {summary}
          </Typography>
        </CardContent>
        
        <CardActions>
      <Typography variant="body2" color="text.secondary">
      {formatISO9075(new Date(createdAt))}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {author.username}
          </Typography>
      </CardActions>
      
      
      </Box>
      </CardActionArea>
    </Card>

    </>
 
  );
}