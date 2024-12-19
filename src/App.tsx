import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { About } from './components/About';
import { Tutorial } from './components/Tutorial';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Hero />
        <Products />
        <Tutorial />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;