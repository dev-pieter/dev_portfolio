<Carousel controls={false}>
                    {/* <Carousel.Item className="item" interval={1500}>
                    <Container className="item-container">
                    
                    </Container>
                    </Carousel.Item> */}
                    <Carousel.Item className="item" interval={10000}>
                        {/* <h2 className="heading h-carousel"></h2> */}
                        <Container className="item-container">
                            <div>
                            <h2 className="heading" style={{color: "white", paddingBottom: "3rem"}}>Mibrary</h2>
                            <Row style={{paddingBottom : "5rem"}}>
                                <Col md={6} sm={12}>
                                    <img className="img-carousel" src={mibrary} alt=""/>
                                </Col>
                                <Col md={6} sm={12}>
                                    <div className="pr-description">
                                        <p><b>MiBrary</b></p>
                                        <p className="c-text">A free Book Library Web App developed in <b>ReactJS</b></p>
                                        <p className="c-text">Functionality includes but not limited to: Login with Google OAuth 2.0, Viewing of Google Books Bookshelf, Google Books Database Search</p>
                                        <p className="c-text">Entirely developed in the ReactJS and NodeJS frameworks<br/>
                                        Backend: NodeJS API on AWS, Express, Javascript, MongoDB <br/>
                                        Frontend: <b>ReactJS</b>, HTML, CSS, Bootstrap</p>
                                        <br/>
                                        <Row>
                                            <Col md={6} sm={12}>
                                                <span className="hero-btn hero-btn--cv" style={{width: "100%"}}><a href="https://mibraryapp.herokuapp.com/home" target="_blank">Visit</a></span>
                                            </Col>
                                            <Col md={6} sm={12}>
                                                <span className="hero-btn hero-btn--cv" style={{width: "100%"}}><a href="https://github.com/pietabrood/Mibrary" target="_blank">Code</a></span>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                            </div>
                        </Container>
                    </Carousel.Item>
                    <Carousel.Item className="item" interval={1500}>
                        {/* <h2 className="heading h-carousel"></h2> */}
                        <Container className="item-container">
                            <div>
                            <h2 className="heading" style={{color: "white", paddingBottom: "3rem"}}>TutPRO</h2>
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
                                                <span className="hero-btn hero-btn--cv" style={{width: "100%"}}><a onClick={() => alert('Site Under Construction. Please view source code on GitHub')} target="_blank">Visit</a></span>
                                            </Col>
                                            <Col md={6} sm={12}>
                                            <span className="hero-btn hero-btn--cv" style={{width: "100%"}}><a href="https://github.com/pietabrood/TUTPRO" target="_blank">Code</a></span>
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
                                <h2 className="heading" style={{color: "white", paddingBottom: "3rem"}}>DOTerra Man</h2>
                                <Row style={{paddingBottom : "5rem"}}>
                                    <Col md={6} sm={12}>
                                        <img className="img-carousel" src={doterra} alt=""/>
                                    </Col>
                                    <Col md={6} sm={12}>
                                        <div className="pr-description">
                                            <p className="c-text">Initial creation, maintenance and adjustments of website using WordPress with additional custom HTML, CSS and JavaScript elements</p>
                                            <br/>
                                            <span className="hero-btn hero-btn--cv btn-phone" style={{width: "50%"}}><a href="https://www.doterraman.co.za/" target="_blank">View Live</a></span>
                                        </div>
                                        
                                        
                                    </Col>
                                </Row>
                            </div>
                        
                        </Container>
                    </Carousel.Item>
                    <Carousel.Item className="item" interval={1500}>
                        <Container className="item-container">
                            <div>
                                <h2 className="heading" style={{color: "white", paddingBottom: "2rem"}}>Smitten With Leather</h2>
                                <Row style={{paddingBottom : "5rem"}}>
                                    <Col md={6} sm={12}>
                                        <img className="img-carousel" src={smitten} alt=""/>
                                    </Col>
                                    <Col md={6} sm={12}>
                                        <div className="pr-description">
                                            <p className="c-text">Initial creation, maintenance and adjustments of website using WordPress with additional custom HTML, CSS and JavaScript elements</p>
                                            <br/>
                                            <span className="hero-btn hero-btn--cv btn-phone" style={{width: "50%"}}><a href="https://www.smittenwithleather.co.za/" target="_blank">View Live</a></span>
                                        </div>
                                        
                                        
                                    </Col>
                                </Row>
                            </div>
                        
                        </Container>
                    </Carousel.Item>
                </Carousel>