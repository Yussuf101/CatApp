import React from 'react'
import { Button } from './Button';
//import '/HeroSection.css';
// import '../src/App.css';

function HeroSection() {
    return (
        <div className ='hero-container'> 
        <h1> DELIVERY IN 24 HOURS </h1>
        <p> Your future pet is waiting for you </p>
        <div className="hero-btns">
            <Button 
            className ='btns' 
            buttonStyle= 'btn--outline'
            buttonSize= 'btn--large'
            > 
             GET STARTED
            </Button>
            <Button 
            className ='btns' 
            buttonStyle= 'btn--primary'
            buttonSize= 'btn--large'
            > 
            CAT COURIER <i className='far fa-play-circle'></i> 
            </Button>
        </div>   
        </div>
    );
}

export default HeroSection;