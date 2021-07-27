import {Row, Col, Container} from "react-bootstrap";

const Contact = () =>{
    return(
        <section id="contact">
            <Container style={{textAlign: 'center', justifyContent: "center"}}>
                <h2>{'03. Get in Touch'} </h2>
                <p className="email"><a href="mailto:pieter_nortje@outlook.com">{'pieter_nortje@outlook.com'}</a></p>
                <br/>
                <div style={{width: "100%", display: 'flex', justifyContent: "center"}}>
                    <a href='https://github.com/dev-pieter' target='_blank' style={{textDecoration: 'none' ,color:'black'}}><i className="fa fa-github icon"></i></a>
                    <a href='https://www.linkedin.com/in/pieternortje/' target='_blank' style={{textDecoration: 'none' ,color:'black'}}><i className="fa fa-linkedin-square icon"></i></a>
                </div>
            </Container>
        </section>
    );
};

export default Contact;