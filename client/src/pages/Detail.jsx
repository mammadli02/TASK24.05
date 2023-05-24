import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { GETBYID } from '../api/request';
import { Box, Grid, Typography,Button } from '@mui/material';
import {  Card } from 'antd';
import { Helmet } from 'react-helmet';

const Detail = () => {
  const[imition,setImition] = useState({});
  const{id} = useParams();
  useEffect(()=>{
    GETBYID(id).then(res=>{
        setImition(res);
    })
  },[id]);
  return (
    <>
    <Helmet>
       <title>Detail Page</title>
     </Helmet>
     <Box
        
        sx={{ flexGrow: 1, width: "90%", margin: "25px auto" }}
      >
        

        <Grid container spacing={2}>
    
      
                <Grid key={imition.id} item lg={3} md={6} sm={12}>
                  <Card
                    hoverable
                    cover={
                      <img
                        style={{
                          height: "250px",
                          objectFit: "cover",
                          objectPosition: "top center ",
                        }}
                        alt="example"
                        src={imition.imageUrl}
                      />
                    }
                  >
                    <Typography>
                      <Link to={`/home/${imition._id}`}  style={{backgroundColor: '#222',
    color: '#fff ',
    padding:'8px 12px',
    marginLeft:'-25px'}} >{imition.contry}</Link>
                    </Typography>
                    <Typography style={{fontSize:'18px', fontWeight:'600', color:
                    
                    
                    
                    "#222222", marginTop:'20px'}}> {imition.title}</Typography>
                    <Typography sty> {imition.paragraph}</Typography>
                    
                    <Button variant='contained' color="primary"><Link style={{color:'white'}} to='/home'>Go Back</Link></Button>

                  </Card>
                </Grid>
            
          
        </Grid>
      </Box>
    </>
  )
}

export default Detail