import React,  { useEffect, useState } from "react";
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-scroll';

const Hero =() => {
    return(
        <section id="hero" className="jumbotron">
            <Container>
                <h1 className="hero-text">
                    {'Hi my name is '}
                    <span className="name-text">Pieter Nortje</span>
                    <br/>
                    {'Welcome to my developer portfolio '}
                </h1>
                <br/>
                <span className="hero-btn hero-btn--hero"><Link to="about" smooth duration={1000}>About Me</Link></span>
            </Container>
        </section>
    );
};

export default Hero;