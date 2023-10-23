
import Intro from './components/Intro/intro';
import Works from './components/Works/works';
import Skills from './components/Skills/skills';
import Navbar from './components/NavBar/navbar';
import Contact from './components/Contact/contact';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Intro/>
      <Skills/>
      <Works />
      <Contact/>
    </div>
  );
}

export default App;
