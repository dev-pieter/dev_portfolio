import Hero from "./components/hero.jsx";
import About from "./components/about.jsx";
import Projects from "./components/projects.jsx";
import Contact from "./components/contact.jsx"
import { Link, Element } from 'react-scroll';
import {useState, useEffect} from 'react';
import ReactDOM from 'react-dom'

function App() {

  const scrollTo = (ref) => {
    const scroll = document.getElementById(ref);

    if(scroll){
      scroll.scrollIntoView();
    }
  }


  return (
    <div className="App">
      <div className='nv'>
                <div>
                    <h1 className="brand">PN</h1>
                </div>
                <div>
                    <Link className="links" onClick={() => scrollTo('home_scroll')}><i class="fa fa-home home-i" aria-hidden="true"></i>{'Home'}</Link><br/><br/>
                    <Link className="links" onClick={() => scrollTo('about_scroll')}><i class="fa fa-user-circle home-i" aria-hidden="true"></i>{'About Me'}</Link><br/><br/>
                    <Link className="links" onClick={() => scrollTo('projects_scroll')}><i class="fa fa-product-hunt home-i" aria-hidden="true"></i>{'My Work'}</Link><br/><br/>
                    <Link className="links" onClick={() => scrollTo('contact_scroll')}><i class="fa fa-envelope-open home-i" aria-hidden="true"></i>{'Contact'}</Link>
                </div>
                <div>
                  <a href='https://github.com/pietabrood' target='_blank' style={{textDecoration: 'none' ,color:'white'}}><i className="fa fa-github nav-i"></i></a>
                  <a href='https://www.linkedin.com/in/pieternortje/' target='_blank' style={{textDecoration: 'none' ,color:'white'}}><i className="fa fa-linkedin-square nav-i"></i></a>
                  <a href="mailto:pieter_nortje@outlook.com" style={{color: "white"}}>{'pieter_nortje@outlook.com'}</a>
                </div>
      </div>
      <div style={{overflowY : 'scroll', height: '100vh'}}>
        <Element id='home_scroll'></Element>
        <Hero></Hero>
        <Element id="about_scroll"></Element>
        <About></About>
        <Element id='projects_scroll'></Element>
        <div style={{background: "black", display:"flex", justifyContent:"center", height:"10vh"}}>
          <br></br>
          <div style={{borderTop:"2px solid white" , width:"65%"}}></div>
          <br></br>
        </div>
        <Projects></Projects>
        <Element id='contact_scroll'></Element>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
