import {Container, Row, Col, Carousel} from "react-bootstrap";
import piet from "../assets/TUTPRO.png";
import doterra from "../assets/DOTERRA.png";

const Projects = () => {
    return(
        <section id="Projects">
            <Container> 
                <Carousel controls={false}>
                    <Carousel.Item className="item" interval={1500}>
                    <Container className="item-container">
                    <h1 className="heading" style={{color: "white"}}>02. Projects</h1>
                    </Container>
                    </Carousel.Item>
                    <Carousel.Item className="item" interval={1500}>
                        {/* <h2 className="heading h-carousel"></h2> */}
                        <Container className="item-container">
                            <div>
                            <h1 className="heading" style={{color: "white"}}>TutPRO</h1>
                            <Row style={{paddingBottom : "5rem"}}>
                                <Col md={6} sm={12}>
                                    <img className="img-carousel" src={piet} alt=""/>
                                </Col>
                                <Col md={6} sm={12}>
                                    <div className="pr-description">
                                        <p className="c-text">A free online tutoring platform with voluntary tutors.</p>
                                        <p className="c-text">Functionality includes but not limited to: Login with database, tutor session booking, Google Calendar API, Resource uploads, database CRUD implementation.</p>
                                        <p className="c-text">Entirely developed in ASP.Net MVC <br/>
                                        Backend: C#, Entity Framework, SQL Database <br/>
                                        Frontend: chtml, CSS, JavaScript, Razor, JQuery</p>
                                        <br/>
                                        <Row>
                                            <Col md={6} sm={12}>
                                                <span className="hero-btn hero-btn--cv" style={{width: "100%"}}><a href="https://tutpro.azurewebsites.net/">Visit</a></span>
                                            </Col>
                                            <Col md={6} sm={12}>
                                            <span className="hero-btn hero-btn--cv" style={{width: "100%"}}><a href="https://github.com/pietabrood/TUTPRO">Code</a></span>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                            </div>
                        </Container>
                        
                        
                    </Carousel.Item>
                    <Carousel.Item className="item" interval={1500}>
                        <Container className="item-container">
                            <div>
                                <h1 className="heading" style={{color: "white"}}>DOTerra Man</h1>
                                <Row style={{paddingBottom : "5rem"}}>
                                    <Col md={6} sm={12}>
                                        <img className="img-carousel" src={doterra} alt=""/>
                                    </Col>
                                    <Col md={6} sm={12}>
                                        <div className="pr-description">
                                            <p className="c-text">Initial creation, maintenance and adjustments of website using WordPress with additional custom HTML, CSS and JavaScript elements</p>
                                            <br/>
                                            <span className="hero-btn hero-btn--cv btn-phone" style={{width: "50%"}}><a href="https://www.doterraman.co.za/">View Live</a></span>
                                        </div>
                                        
                                        
                                    </Col>
                                </Row>
                            </div>
                        
                        </Container>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </section>
    );
};

export default Projects;