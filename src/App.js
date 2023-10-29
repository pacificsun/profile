
import Intro from './components/Intro/intro';
import Works from './components/Works/works';
import Skills from './components/Skills/skills';
import Navbar from './components/NavBar/navbar';
import Contact from './components/Contact/contact';
import './app.css'

function App() {
  return (
    <>
      <Navbar />
      <Intro/>
      <Skills/>
      <Works />
      <Contact/>
    </>
  );
}

export default App;
