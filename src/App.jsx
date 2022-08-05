import React from "react";
import Header from './components/header/Header'; 
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contacts/Contact';
import Footer from './components/footer/Footer';


const App = () => {
  return (
    <div className="App">
     <Header /> 
     <Nav />
     <About />
     <Experience />
     <Services />
     <Portfolio />
     <Testimonials />
     <Contact />
     <Footer />
    Lona 
    </div>
  );
}

export default App;
