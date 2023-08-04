import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    const mystyle={
        textDecoration:'none',
        fontSize:'2.5vw',
        color:'white'
    }
  return (
    <div className='nav-container'>
    <NavLink to='/' style={mystyle}> <div className=' item'>Home</div></NavLink> 
    <NavLink to='/students' style={mystyle}> <div className='item' >Students</div></NavLink>
    <NavLink to='/contacts'style={mystyle}> <div className='item'>Contact Us</div></NavLink>
    </div>
  )
}

export default Navbar
