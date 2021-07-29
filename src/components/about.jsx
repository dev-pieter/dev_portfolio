import React,  { useEffect, useState } from "react";
import {Container, Col, Row} from "react-bootstrap";
import piet from "../assets/piet.JPG";
import { Divider, Stack, Center } from "@chakra-ui/react"

const About = () => {
    return (
        <section id="about" className="about-sec">
            <Stack>
            <Container>
                <div className="heading-phone" style={{alignItems: 'center', display: 'flex', justifyContent: "center"}}>
                    <div>
                        <h2 className="heading" style={{color: "white", paddingBottom: "2px"}}>| 01. About Me |</h2>
                    </div>
                </div>  
                <div className='grid-container'>
                    <div>
                        <Center className="about-image">
                            <img style={{boxShadow : '4px 4px 15px black'}} src={piet} alt="Profile"/>
                        </Center>
                    </div>
                    <div>
                        <div className="about-section">
                            <p>I am a very passionate programmer with a mind for creating
                                innovative and efficient code through the utilization
                                of simplistic yet intricate methods. I am an independent
                                individual, able to follow established procedures
                                and work under little to no supervision.
                            </p>
                            <br/>
                            <p>I am competent in languages like: <br/><br/>
                                <list>
                                    <li>JavaScript</li>
                                    <li>C#</li>
                                    <li>C++</li>
                                    <li>SQL</li>
                                </list>
                            </p>
                            <br/>
                            <span className="hero-btn hero-btn--cv" ><a href="https://drive.google.com/file/d/1b6IEE-8cwGHSyKBxx1OksWqr-xbH-CoV/view?usp=sharing">Curriculum Vitae</a></span>
                        </div>
                    </div>
                </div>
            </Container>
            <Center height="200px">
                <Divider width={'97%'}/>
            </Center>
            </Stack>
        </section>
    );
};

export default About;