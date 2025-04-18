'use client'
import Link from 'next/link';
import 'remixicon/fonts/remixicon.css'
import { useState , useContext } from 'react';
import '@/components/components.css'
import Cart from './Cart';
import { MyContext } from './ContextApi';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let { setCartOpen } = useContext(MyContext);
      // const [cartOpen , setCartOpen] = useState(false)
  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-logo">
          BuyNest
        </Link>

        <button 
          className="mobile-menu-button" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="hamburger"></span>
        </button>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/Products" className="nav-link">Products</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
          <i onClick={()=> setCartOpen(prev => !prev)} id='cart' class="ri-shopping-cart-2-line"></i>
          
          <button className="signup-button">
          <i class="ri-google-fill"></i>Sign up with Google
          </button>
        </div>
      </div>
      <Cart />
    </nav>
  );
};

export default Navbar;