import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
const Navbar = () => {
    const [menu,setmenu] = useState("shop");
    const {getTotalcartItems} = useContext(ShopContext);
  return (
  <div className='main'>
    <div className='navbar'>
        <div className="nav-logo">
      <img src={logo} alt="Logo" />
      <p>SHOPPER</p>
     </div>
     <ul className="nav-menu">
        <li onClick={()=>{setmenu("shop")}}><Link  style = {{textDecoration : 'none'}}to = '/shop'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("mens")}}><Link style = {{textDecoration : 'none'}}to = '/mens'>men</Link>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("womens")}}><Link style = {{textDecoration : 'none'}}to = '/womens'>women</Link>{menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("kids")}}><Link style = {{textDecoration : 'none'}}to = '/kids'>kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("admin")}}><Link style = {{textDecoration : 'none'}}to = '/admin'>admin</Link>{menu==="admin"?<hr/>:<></>}</li>
     </ul>
     <div className="nav-login-cart">
        < Link to = '/login'><button>Login</button></Link>
        <Link to = '/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalcartItems()}</div>
     </div>

    </div>
    </div>
  )
}
 
export default Navbar