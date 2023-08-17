import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Home from './Home';
import About from './About';
import Login from './login/index';

export default function App() {
    const [currentPage, setCurrentPage] = useState('home');

    const handlePageChange = (newPage) => {
        if (currentPage !== newPage) {
          setCurrentPage(newPage);
        }
      };

    return(
    <div className='maxContainer container-fluid'>
        <Navbar onPageChange={handlePageChange} />
        {currentPage === 'home' && <Home />}
        {currentPage === 'about' && <About />}
        {currentPage === 'login' && <Login />}
    </div>)
}