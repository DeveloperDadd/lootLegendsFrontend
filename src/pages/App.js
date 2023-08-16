import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from './about';

export default function App() {
    return(
    <div className='maxContainer'>
        <Navbar/>
        <Hero />
        <About />
    </div>)
}