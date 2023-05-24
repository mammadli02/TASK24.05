import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

  
const Part1 = () => {
  return (
    
  <>
    <Box sx={{ flexGrow: 1 }} style={{backgroundColor:"#f6214b", }}>
    <Grid container spacing={2} style={{color:'white', display:'flex', justifyContent:'center', alignItems:'center',paddingTop:'50px'}}>
      <Grid item lg={4} sm={6}>
      <h6 style={{    fontWeight: '300', fontSize:'30px'}}>Process Visa without within hours</h6>
      <h1  style={{fontSize:'60px', marginBottom:'20px'}}>
Immigrations &amp; 
<br />
Visa Consultation
</h1>
<a href="#" style={{backgroundColor: '#fff',
    color: '#222',
    fontSize: '14px',
    fontWeight: '600',textDecoration:'none', padding:'10px', marginTop:'20px'}}>Book Consultancy</a>
      </Grid>
      <Grid item lg={6} sm={10}>
       <img style={{width:'100%'}} src="https://preview.colorlib.com/theme/immigration/img/header-img.png.webp" alt="" />
      </Grid>
      
    </Grid>
  </Box>

  <Box sx={{ flexGrow: 1 }} >
  <Grid container spacing={2}  >

   <Grid item lg={12} style={{display:'flex', justifyContent:'center', alignItems:'center',paddingTop:'50px', backgroundColor:'#f9f9ff'}}>
   <p style={{fontSize: '30px',
    textAlign:'right',
    fontWeight: '100',
    color: '#222',
    padding:'50px'}}>
Start <span style={{fontWeight:"600"}}>planning</span> your 
<br/>
New <span style={{fontWeight:"600"}}>Dream</span>
</p>
<p style={{color: '#777777', fontSize:"25px", margin:'0px 25px'}}>
Lorem ipsum dolor sit amet, consectetur adipisicing elit, <br /> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br /> Ut enim ad minim veniam, quis nostrud exercitation.
</p>
<a style={{backgroundColor: '#f6214b',
    color: '#fff',
    padding: '10px 30px', textDecoration:'none'}} href="#" class="call-btn">Request Free Consultancy</a>
   </Grid>
  </Grid>


  </Box>

  














   </>
  )
}

export default Part1
