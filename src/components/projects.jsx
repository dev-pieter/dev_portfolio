import {Container, Row, Col, Carousel} from "react-bootstrap";
import piet from "../assets/TUTPRO.png";
import doterra from "../assets/DOTERRA.png";
import smitten from "../assets/Smitten.png"
import mibrary from "../assets/Mibrary.png"
import '../style/projects.css';

const Projects = () => {
    return(
        <section id="projects">
            <Container> 
                <div style={{display: 'flex', justifyContent: "center"}}>
                    <div>
                        <h2 className="heading" style={{color: "white", padding: "0"}}>02. Recent Work</h2>
                        <div style={{borderTop:"2px solid white" , width:"100%"}}></div>
                    </div>
                </div>    
            
                <div className="projects-slider">
                    <div xs={5} className="item">
                        <img className="item-img" src={mibrary}></img>
                        <div className="hidden">
                            <div>
                                <h4><b>MiBrary</b></h4>
                                <br></br>
                                {/* <p className="c-text">A free Book Library Web App developed in <b>ReactJS</b></p>
                                <p className="c-text">Functionality includes but not limited to: Login with Google OAuth 2.0, Viewing of Google Books Bookshelf, Google Books Database Search</p>
                                <p className="c-text">Entirely developed in the ReactJS and NodeJS frameworks<br/>
                                            Backend: NodeJS API on AWS, Express, Javascript, MongoDB <br/>
                                            Frontend: <b>ReactJS</b>, HTML, CSS, Bootstrap</p>
                                <br/> */}
                            </div>
                            
                            <div style={{display: 'flex'}}>
                                <a href="https://mibraryapp.herokuapp.com/home" target="_blank"><b>View Live</b></a>
                                <a href="https://github.com/pietabrood/Mibrary" target="_blank"><b>Code</b></a>
                            </div>
                        </div>
                    </div>
                    <div xs={5} className="item">
                        <img className="item-img" src={piet}></img>
                        <div className="hidden">
                            <h4><b>Tutpro</b></h4>
                            <br></br>
                            {/* <p className="c-text">A free online tutoring platform with voluntary tutors.</p>
                            <p className="c-text">Functionality includes but not limited to: Login with database, tutor session booking, Google Calendar API, Resource uploads, database CRUD implementation.</p>
                            <p className="c-text">Entirely developed in ASP.Net MVC <br/>
                                        Backend: C#, Entity Framework, SQL Database <br/>
                                        Frontend: chtml, CSS, JavaScript, Razor, JQuery</p>
                            <br/> */}
                            <div style={{display: 'flex'}}>
                                <a href="https://github.com/pietabrood/TUTPRO" target="_blank"><b>Code</b></a>
                            </div>
                        </div>
                    </div>
                    <div xs={5} className="item">
                        <img className="item-img" src={smitten}></img>
                        <div className="hidden">
                            <h4><b>Smitten With Leather</b></h4>
                            <br/>
                            {/* <p className="c-text">Initial creation, maintenance and adjustments of website using WordPress with additional custom HTML, CSS and JavaScript elements</p>
                            <br/> */}
                            <div style={{display: 'flex'}}>
                                <a href="https://www.smittenwithleather.co.za/" target="_blank"><b>View Live</b></a>
                            </div>
                        </div>
                    </div>
                    <div xs={5} className="item">
                        <img className="item-img" src={doterra}></img>
                        <div className="hidden">
                            <h4><b>Doterra Man</b></h4>
                            <br/>
                            {/* <p className="c-text">Initial creation, maintenance and adjustments of website using WordPress with additional custom HTML, CSS and JavaScript elements</p>
                            <br/> */}
                            <div style={{display: 'flex'}}>
                                <a href="https://www.doterraman.co.za/" target="_blank"><b>View Live</b></a>
                            </div>
                        </div>
                    </div>
                </div>   
            </Container>
        </section>
    );
};

export default Projects;