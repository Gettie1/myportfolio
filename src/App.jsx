import Header from './components/header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Certificates from './components/Certificates/';
import Contact from './components/Contact';
function App() {
    return (
      <div>
        <Header />
        <Home />
        <About />
        <Skills />
        <Certificates />
        <Contact />
        <Footer />
      </div>
    );
}
  export default App;