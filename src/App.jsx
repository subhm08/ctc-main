import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact';

import AppointmentPage from './components/AppointmentPage';
import ServicePage from './components/ServicePage';


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,  
    });
  }, []);
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path='/appointment' element={<AppointmentPage/>}></Route>
        <Route path='/service' element={<ServicePage/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
