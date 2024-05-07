import './App.css';
import Nav from "./nav";
import Home from "./home";
import About from "./about";
import Resume from './resume';
import Skill from "./skill";
import Project from "./project";
import Contact from './contact';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <About/>
      <Resume/>
      <Skill/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;
