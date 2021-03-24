import React,  { useEffect, useState } from "react";
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-scroll';
import '../style/hero.css'

const Hero =() => {
    return(
        <section id="hero" className="jumbotron">
            <Container>
                <h1 className="hero-text">
                    Hi, I'm 
                    <span className="name-text">Pieter Nortje</span>
                    <br/>
                    <h3>{'Software Developer | Student'}</h3>
                </h1>
                <br/>
                {/* <div >
                    <div style={{borderTop:"2px solid red" , width:"40%"}}></div>
                </div> */}
                <br/>
            </Container>
        </section>
    );
};

export default Hero;