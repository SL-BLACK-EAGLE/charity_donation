import './App.css';
import Header from "./component/Header";

import Footer from "./component/Footer";
import React from 'react';
import About from './pages/About';
import Campaigns from './pages/Campaigns'
import SignIn from './pages/SignIn';

import Contact from "./pages/Contact"



function App() {
  return (
    <main>

      <Header/>
      <Campaigns/>
      <Footer/>

      <Header />
      <Contact />
     

    </main>
  );
}

export default App;

