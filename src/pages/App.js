import React from 'react';
import Header from '../components/Navbar';
import About from './about';

export default function App() {
    return(
    <div className='maxContainer'>
        <Header/>
        <About />
    </div>)
}