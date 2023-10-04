import './App.css';
import Header from "./component/Header";
import Footer from "./component/Footer";
import Donate from "./pages/Donate";
import SignUp from './pages/SignUp';
import React from 'react';
import About from './pages/About';
import Campaigns from './pages/Campaigns'
import SignIn from './pages/SignIn';
import Contact from "./pages/Contact"




function App() {
  return (
    <main>
    <Home 
  <Header />
  <Donate />
    <Contact />
  <Footer/>   
    </main>
  );
}

export default App;

