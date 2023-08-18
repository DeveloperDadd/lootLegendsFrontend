import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Browse from '../components/Browse';
import Footer from '../components/Footer';

export default function Home() {
    return(
        <>
        <Hero />
        <Browse />
        <Footer />
        </>
    )
}