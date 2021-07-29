import React,  { useEffect, useState } from "react";
import { Divider, Stack, Center, Heading } from "@chakra-ui/react"
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Tag,
    HStack
  } from "@chakra-ui/react"

const History = () => {
    return (
        <section id="work" >
            <Stack minW={'70%'} maxW={'90%'}>
            <h2 className="heading" style={{color: "white"}}>| 02. Experience |</h2>
            <Center>
            <Accordion width={'100%'} textColor={'white'} defaultIndex={[0]} allowMultiple allowToggle>
                <AccordionItem width={'100%'}>
                    <Heading>
                    <AccordionButton>
                        <Box flex="1" textAlign="left">
                        <HStack spacing="5">
                            <b>JavaScript/Python engineer<br/> at The Sun Pays</b><Tag variant={'outline'} color={'white'}>6 mon</Tag>
                        </HStack>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </Heading>
                    <AccordionPanel>
                    I have been working at this fast-paced renewable energy company as a software engineer for almost 6 months. I have worked on a few exciting projects in my time there and learned a lot in terms of IOT, front-end and back-end development.
                    <br/><br/>
                    My skills as developer brought a lot to the table with the creation of a Solar Bot (Monitoring software for solar inverters and lithium batteries), helping clients extend the life of their solar setups. Here is a quick overview of the things I have worked on:
                    <br/><br/>
                    <ul>
                        <li>Development and maintenance of Web application (Dashboard) built on React.js</li>
                        <li>Development and integration of a Python flask API for data writing/fetching/updating to a MySQL database</li>
                        <li>Deployment of production software to GCP (DevOps)</li>
                        <li>IOT development on Raspberry pi, in Python, for data collection and communication with solar inverters. I used Modbus communication for reading/writing data to/from inverters and batteries.</li>
                        <li>Goal oriented analysis of business outcomes with SDLC</li>
                    </ul>
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem width={'100%'}>
                    <Heading>
                    <AccordionButton>
                    <Box flex="1" textAlign="left">
                        <HStack spacing="5">
                            <b>Self employed web developer</b><Tag variant={'outline'} color={'white'}>1 yr</Tag>
                        </HStack>
                    </Box>
                    <AccordionIcon />
                    </AccordionButton>
                    </Heading>
                    <AccordionPanel>
                    In my time at University, I took on a couple of side projects for private clients. I built and maintained websites/eCommerce stores and sought after the UI/UX design and feature integration to maximise these companies' reach and product delivery.
                    <br/><br/>
                    Technologies I used:
                    <br/><br/>
                    <ul>
                        <li>JavaScript/HTML/CSS on the front-end</li>
                        <li>PHP and SQL on the back-end</li>
                        <li>Wordpress and WooCommerce for CMS/eCommerce</li>
                    </ul>
                    </AccordionPanel>
                </AccordionItem>
                
            </Accordion>
            </Center>
            </Stack>
        </section>
    );
};

export default History;