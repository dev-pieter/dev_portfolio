import React,  { useEffect, useState } from "react";
import {Container, Col, Row} from "react-bootstrap";
import piet from "../assets/piet.JPG";

const About = () => {
    return (
        <section id="about" className="about-sec">
            <Container>
                <h1 className="heading" style={{color: "white"}}>01. About Me</h1>
                <Row>
                    <Col md={6} sm={12}>
                        <div className="about-image">
                            <img src={piet} alt="Profile"/>
                        </div>
                    </Col>
                    <Col md={6} sm={12}>
                        <div className="about-section">
                            <p>A passionate programmer with a mind for creating
                                innovative and efficient code through the utilization
                                of object orientated methods. I am an independent
                                individual, able to follow established procedures
                                and work under little to no supervision.</p>
                            <br/>
                            <span className="hero-btn hero-btn--cv" ><a href="https://drive.google.com/file/d/1b6IEE-8cwGHSyKBxx1OksWqr-xbH-CoV/view?usp=sharing">Curriculum Vitae</a></span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;