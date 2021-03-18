import {Row, Col, Container} from "react-bootstrap";

const Contact = () =>{
    return(
        <section id="Contact">
            <Container style={{textAlign: 'center', justifyContent: "center"}}>
                <h1>{'03. Get in Touch '} </h1>
                <div style={{display: 'flex', justifyContent: "center"}}>
                    <div style={{borderTop:"2px solid black" , width:"40%"}}></div>
                </div>
                <h2><span className="name-text email"><a href="mailto:pieter_nortje@outlook.com" style={{color: "blue"}}>{'pieter_nortje@outlook.com'}</a></span></h2>
                <br/>
                <br/>
                <br/>
                <div style={{width: "100%", display: 'flex', justifyContent: "center"}}>
                    <a href='https://github.com/pietabrood' target='_blank' style={{textDecoration: 'none' ,color:'black'}}><i className="fa fa-github icon"></i></a>
                    <a href='https://www.linkedin.com/in/pieternortje/' target='_blank' style={{textDecoration: 'none' ,color:'black'}}><i className="fa fa-linkedin-square icon"></i></a>
                </div>
                {/* <Row>
                <Col md={6} sm={12}>
                    
                    </Col>
                <Col md={6} sm={12}>

                </Col>
                </Row> */}
            </Container>
        </section>
    );
};

export default Contact;