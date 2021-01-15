import Hero from "./components/hero.jsx";
import About from "./components/about.jsx";
import Projects from "./components/projects.jsx";
import Contact from "./components/contact.jsx"

function App() {
  return (
    <div className="App">
      <Hero></Hero>
      <About></About>
      <div style={{background: "blue", display:"flex", justifyContent:"center", height:"10vh"}}>
        <br></br>
        <div style={{borderTop:"2px solid white" , width:"85%"}}></div>
        <br></br>
      </div>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
}

export default App;
