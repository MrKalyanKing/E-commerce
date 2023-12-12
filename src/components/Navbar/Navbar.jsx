import React, { useState } from 'react'
import './Navbar.css'
import logo_nav from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  const[menu,setmenu]=useState("shop")
  return (
    <div className='Navbar'>
        <div className="nav-logo">
          <img src={logo_nav} alt="" />
            <h1>SHOPPER</h1>
        </div>
            <div className="navmenu">
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
              <div className="counter">0</div>
            </div>
    </div>
  )
  }
export default Navbar