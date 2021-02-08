import React,  { useEffect, useState } from "react";
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-scroll';

const Hero =() => {
    return(
        <section id="hero" className="jumbotron">
            <Container>
                <h1 className="hero-text">
                    {'Hi, my name is '}
                    <span className="name-text">Pieter Nortje</span>
                    <br/>
                    <h2>{'Welcome to my developer portfolio '}</h2>
                </h1>
                <br/>
                <div >
                    <div style={{borderTop:"2px solid blue" , width:"40%"}}></div>
                </div>
                <br/>
                <span className="hero-btn hero-btn--hero"><Link to="about" smooth duration={1000}>About Me</Link></span>
            </Container>
        </section>
    );
};

export default Hero;