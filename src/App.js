import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';

import { CV } from "./Curriculum/CV.js";


const { hero, education, experience, languages, habilities, volunteer } = CV;


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Work education={education} experience={experience}/>
      <Contact contact={hero}/>
    </div>
  );
}

export default App;
