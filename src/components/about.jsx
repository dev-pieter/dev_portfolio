import React,  { useEffect, useState } from "react";
import {Container, Col, Row} from "react-bootstrap";
import piet from "../assets/piet.JPG";

const About = () => {
    return (
        <section id="about" className="about-sec">
            <Container>
                <h1 className="heading" style={{color: "white"}}>ABOUT ME</h1>
                <Row>
                    <Col md={6} sm={12}>
                        <div className="about-image">
                            <img src={piet} alt="Profile"/>
                        </div>
                    </Col>
                    <Col md={6} sm={12}>
                        <div className="about-section">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam atque nam, fugiat harum architecto eius recusandae suscipit consequuntur perferendis ipsa voluptatem aspernatur aut deleniti magni.</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam atque nam, fugiat harum architecto eius recusandae suscipit consequuntur perferendis ipsa voluptatem aspernatur aut deleniti magni.</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam atque nam, fugiat harum architecto eius recusandae suscipit consequuntur perferendis ipsa voluptatem aspernatur aut deleniti magni.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;