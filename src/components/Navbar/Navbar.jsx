
import React, { useContext, useState,useRef } from 'react'
import './Navbar.css'
import logo_nav from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'
import nav_dropdown from '../Assets/dropdown.png'
//import 'bootstrap/dist/css/boootstrap/.min.css'
//import {Container } from 'reract-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css'


export const Navbar = () => {
  const[menu,setmenu]=useState("shop")
  const {getTotalCArtitem}=useContext(ShopContext)
  const menuRef= useRef();
  const dropdown_toggle=(e)=>{
        menuRef.current.classList.toggle('navmenu-visible');
        e.target.classList.toggle('open');
  }
  return (
    
      
    <div className='Navbar'>
      
    
        <div className="nav-logo">
          <img  src={logo_nav} alt="" />
            <h1>SHOPPER</h1>
        </div>
      
             <img className='nav_dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
            <div ref={menuRef} className="navmenu">
                <ul className='kh'>
                    <li onClick={()=>{setmenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{(menu==="shop"?<hr/>:<></>)}</li>
                    <li onClick={()=>{setmenu("men")}}><Link style={{textDecoration:'none'}} to='/men'>Men</Link>{(menu==="men"?<hr/>:<></>)}</li>
                    <li onClick={()=>{setmenu("women")}}><Link style={{textDecoration:'none'}}to='/women'>Women</Link>{(menu==="women"?<hr/>:<></>)}</li>
                    <li onClick={()=>{setmenu("kids")}}><Link style={{textDecoration:'none'}}to='/kids'>Kids</Link>{(menu==="kids"?<hr/>:<></>)}</li>
                </ul>
            </div>
      
      
            <div className="navcart">
              <Link to='loginsignup'><button className='btn'>Login</button></Link>
              <Link to='Cart'><img src={cart_icon} alt="" /></Link>
              <div className="counter">{getTotalCArtitem()}</div>
            </div>
    </div>
    
  
  )
  }
export default Navbar 