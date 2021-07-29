import {Container} from "react-bootstrap"
import {Center,Stack,Text,Divider} from '@chakra-ui/react'
import tutpro from "../../assets/TUTPRO.png"
import doterra from "../../assets/DOTERRA.png"
import smitten from "../../assets/Smitten.png"
import mibrary from "../../assets/Mibrary.png"
import solarbot from "../../assets/TSPSolarBot.png"
import blog from "../../assets/Blog.png"
import Card from './card'
import '../../style/projects.css';

const Projects = () => {
    const projects = [
    {
        name: 'TSP Solar Bot',
        description: 'A commercial monitoring dashboard for solar inverters.',
        frontend: ['ReactJS', 'Chakra-ui', 'Data fetching / query caching', 'react-query'],
        backend: ['GCP', 'Sys admin / DevOps', 'MySQL', 'Raspberry pi (collector)', 'Python flask API'],
        links: [{name: 'live', url: 'https://tspsolarbot.com'}],
        img: solarbot
    },
    {
        name: 'Blog by dev_pieter',
        description: 'My personal blog where I share my development experiences.',
        frontend: ['ReactJS', 'Chakra-ui', 'Query caching and data fetcing with react-query)'],
        backend: ['Digital Ocean', 'NodeJS API', 'Sys admin / DevOps', 'Nginx for domain routing', 'MongoDB'],
        links: [{name: 'live', url: 'https://blog.devpieter.co.za'}, {name: 'code', url: 'https://github.com/dev-pieter'}],
        img: blog
    },
    {
        name: 'Mibrary',
        description: 'A MERN Stack book library app.',
        frontend: ['ReactJS', 'HTML/CSS', 'ReactJS hooks (State management)'],
        backend: ['AWS', 'Sys-admin/DevOps', 'Nginx for domain routing', 'MongoDB'],
        links: [{name: 'code', url: 'https://github.com/dev-pieter'}],
        img: mibrary
    },
    {
        name: 'Tutpro',
        description: 'An online tutoring platform, built for students.',
        frontend: ['C#', 'HTML/CSS'],
        backend: ['Azure', 'Sys-admin/DevOps', '.NET MVC'],
        links: [{name: 'code', url: 'https://github.com/dev-pieter'}],
        img: tutpro
    }]


    return(
        <section id="projects">
            <Container> 
                <Center height="200px">
                    <Divider width={'100%'}/>
                </Center>
                <Center>
                    <Stack textAlign={'center'}>
                        <h2 className="heading" style={{color: "white"}}>| 03. Recent Work |</h2>
                        <Text textColor="white">
                            Here are some examples of projects I have worked on in the past year of my code journey.<br/>
                            <i>Ordered by most recent.</i>
                        </Text>
                    </Stack>
                </Center>    
            
                <div className="projects-slider">
                    {projects.map(item => {
                        return <Card details={item}></Card>
                    })}
                </div>   
            </Container>
        </section>
    );
};

export default Projects;