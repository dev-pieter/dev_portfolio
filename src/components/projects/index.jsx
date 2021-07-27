import {Container} from "react-bootstrap"
import tutpro from "../../assets/TUTPRO.png"
import doterra from "../../assets/DOTERRA.png"
import smitten from "../../assets/Smitten.png"
import mibrary from "../../assets/Mibrary.png"
import solarbot from "../../assets/TSPSolarBot.png"
import blog from "../../assets/Blog.png"
import Card from './card'
import '../../style/projects.css';

const Projects = () => {
    const projects = [{
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
        name: 'TSP Solar Bot',
        description: 'A commercial monitoring dashboard for solar inverters.',
        frontend: ['ReactJS', 'Chakra-ui', 'Data fetching / query caching', 'react-query'],
        backend: ['GCP', 'Sys admin / DevOps', 'MySQL', 'Raspberry pi (collector)', 'Python flask API'],
        links: [{name: 'live', url: 'https://tspsolarbot.com'}],
        img: solarbot
    }]


    return(
        <section id="projects">
            <Container> 
                <div style={{display: 'flex', justifyContent: "center"}}>
                    <div>
                        <h2 className="heading" style={{color: "white"}}>02. Recent Work</h2>
                    </div>
                </div>    
            
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