import React from 'react'
import { Link } from 'react-router-dom'
import  './Navbar.css'
const Navbar = () => {
  return (
    <>
    <ul style={{display:'flex', justifyContent:'center',width: "100%",padding:'25px' }}>
        <li style={{listStyle:'none'}}>
            <Link style={{color: '#222' ,marginRight:'100px',textDecoration:'none' ,
    fontWeight: '500',
    fontSize: '20px', }} to='/home' className='link' >Home</Link>
        </li>
            <li  style={{listStyle:'none'}}> <Link  to='/add' style={{color: '#222' ,textDecoration:'none' ,
    fontWeight: '500',
    fontSize: '20px' }} className='link'>Add</Link>
        </li>
        
    </ul>
    
    
    </>
  )
}

export default Navbar
