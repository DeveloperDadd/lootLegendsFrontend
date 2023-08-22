import React, { useState } from 'react';
import Hero from '../components/Hero';
import Search from '../components/Search';
import Footer from '../components/Footer';
import Browse from '../components/Browse';

export default function Home() {
    return(
        <>
        <Hero />
        <Search />
        <Browse />
        <Footer />
        </>
    )
}