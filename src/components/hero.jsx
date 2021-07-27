import React from "react";
import { Container } from 'react-bootstrap';
import {Center, Stack} from '@chakra-ui/react'
import '../style/hero.css'

const Hero =() => {
    return(
        <section id="hero" className="jumbotron">
            <Center>
                <Stack m={'3'}>
                    <h1 className="hero-text">
                        Hi, I'm 
                        <span className="name-text">Pieter Nortje</span>
                    </h1>
                    <p>{'Software engineer | Code lover'}</p>
                </Stack>
            </Center>
        </section>
    );
};

export default Hero;