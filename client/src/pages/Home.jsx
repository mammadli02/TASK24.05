import React from 'react'
import Part1 from '../components/Part1'
import { Container, Grid } from '@mui/material'
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { Card, Typography } from "antd";
import { DELETE, GETALLL } from "../api/request";
import { Link } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";



const Home = () => {
  const [imiyions, setImitions] = useState([]);
  useEffect(() => {
    GETALLL().then((res) => {
      setImitions(res);
    });
  }, []);
  
  return (
 <>
 
 <Helmet>
        <title>Home Page</title>
      </Helmet>
   <Part1/>

<Container maxWidth="lg">
  <Grid container spacing={2}  >
  <Grid item lg={12} style={{padding:"50px"}} >
  <h1 style={{    fontSize: '36px', textAlign:'center', fontWeight:'600', marginBottom:'20px'}}>Requirements to be Immigrants</h1>
  <p style={{color:'#777777', fontSize:"18px", textAlign:'center'}}>
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua.
</p>
    </Grid>
    </Grid>



      <Box
        
        sx={{ flexGrow: 1, width: "90%", margin: "25px auto" }}
      >
        

        <Grid container spacing={2}>
          {imiyions &&
            imiyions.map((imiyion) => {
              return (
                <Grid key={imiyion.id} item lg={3} md={6} sm={12}>
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
                        src={imiyion.imageUrl}
                      />
                    }
                  >
                    <Typography>
                      <Link to={`/home/detail/${imiyion._id}`}  style={{backgroundColor: '#222',
    color: '#fff ',
    padding:'8px 12px',
    marginLeft:'-25px'}} >{imiyion.contry}</Link>
                    </Typography>
                    <Typography style={{fontSize:'18px', fontWeight:'600', color:
                    
                    
                    
                    "#222222", marginTop:'20px'}}> {imiyion.title}</Typography>
                    <Typography sty> {imiyion.paragraph}</Typography>
                    <Button
                      onClick={() => {
                        Swal.fire({
                          title: "Are you sure?",
                          text: "You won't be able to revert this!",
                          icon: "warning",
                          showCancelButton: true,
                          confirmButtonColor: "#3085d6",
                          cancelButtonColor: "#d33",
                          confirmButtonText: "Yes, delete it!",
                        }).then((result) => {
                          if (result.isConfirmed) {
                            DELETE(imiyion._id).then((res) => {
                              Swal.fire(
                                `${imiyion.title} Deleted!`,
                                "Your  has been deleted.",
                                "success"
                              );
                            });
                            setImitions(
                              imiyions.filter((x) => x._id !== imiyion._id)
                            );
                          }
                        });
                      }}
                      variant="outlined"
                      color="warning"
                    >
                      Delete
                    </Button>


               <Button><Link to={`/home/edit/${imiyion._id}`}>EDIT</Link></Button>
                  </Card>
                </Grid>
              );
            })}
        </Grid>
      </Box>













</Container>

 
 
 </>







  )
}

export default Home
