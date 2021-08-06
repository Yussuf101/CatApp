
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import './Navbar.css'; 
import { Button } from './Button'; 



function Navbar() {
    const [click, setClick] = useState(false);
    const [button,setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    /* function to display on mobile */
    
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true);
        }
    };

   /* to stop sign up button appearing when minimize screen*/ 
   useEffect (() => {
       showButton(); 
   }, []); 

    /* when resize screen want to get show button to work*/ 
    window.addEventListener('resize', showButton);
   
    return (
        <>
        <nav className = "navbar">
            <div className ="navbar-container">
                <Link to="/" className = "navbar-logo" >
                 FELINE FINDS <i className="fas fa-american-sign-language-interpreting" />
                </Link>
                <div className ='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active': 'nav-menu'}>
                    <li className ='nav-item'>
                     <Link to ='/home' className = 'nav-links' onClick={closeMobileMenu}>
                        Home
                     </Link>
                    </li>
                    <li className ='nav-item'>
                     <Link 
                     to ='/services' 
                     className = 'nav-links' 
                     onClick={closeMobileMenu}
                     >
                        Services
                     </Link>
                    </li>
                    <li className ='nav-item'>
                     <Link to ='/products'
                      className = 'nav-links' 
                      onClick={closeMobileMenu}>
                        Products
                     </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle= 'btn--outline'> CAT MERCH </Button>}
            </div>
        </nav>     
        </>
    )
}

export default Navbar; 
