import React from 'react';
import {
  About,
  Contact,
  Experience,
  Footer,
  Header,
  Nav,
  Portfolio,
  Service,
  Testimonials,
} from './components';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Service />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
