import {Row, Col, Container} from "react-bootstrap";

const Contact = () =>{
    return(
        <section id="Contact">
            <Container>
                <h1>
                {'03. Get in Touch '} <br/>
                <div >
                    <div style={{borderTop:"2px solid black" , width:"50%"}}></div>
                </div>
                <span className="name-text email"><a href="mailto:pieter_nortje@outlook.com" style={{color: "blue"}}>{'pieter_nortje@outlook.com'}</a></span>
                </h1>
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