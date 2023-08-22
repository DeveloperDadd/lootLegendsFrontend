import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Home from './Home';
import About from './About';
import Login from './login/index';
import { GlobalStateProvider } from '../context/GlobalState';

export default function App() {

    /* on load check local storage, set state depending on if user is logged in or not */ 

    const [currentPage, setCurrentPage] = useState('home');

    const handlePageChange = (newPage) => {
        if (currentPage !== newPage) {
          setCurrentPage(newPage);
        }
      };

    return(
    <GlobalStateProvider>
      <div className='maxContainer container-fluid'>
        <Navbar onPageChange={handlePageChange} />
        {currentPage === 'home' && <Home />}
        {currentPage === 'about' && <About />}
        {currentPage === 'login' && <Login />}
      </div>
    </GlobalStateProvider>
    )
}