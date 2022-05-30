import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'
import { Cart } from './';
import { useStateContext} from '../context/StateContext';


const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
     <nav className='navbar-pages'>
      <p className="logo">
      <img src="assets/kang.webp" className="navbar-image"
         // src="assets/kangaroobag.jpg"  className="navbar-image"
        />
        <Link href="/">Kangaroo</Link>
      </p>
      
       <Link href="/">Home</Link> 
       <Link href="/shop">Shop Now</Link> 
       <Link href="/about">About us</Link> 
       <Link href="/contactus">Contact us</Link> 
       </nav>
     

      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}

     
    </div>
  )
}

export default Navbar