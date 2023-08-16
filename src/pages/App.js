import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Browse from '../components/Browse';
import About from './about';

export default function App() {
    return(
    <div className='maxContainer container-fluid'>
        <Navbar/>
        <Hero />
        <Browse />
        <About />
    </div>)
}