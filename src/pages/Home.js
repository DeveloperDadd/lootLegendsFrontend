import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import Search from '../components/Search';
import Footer from '../components/Footer';
import Browse from '../components/Browse';
import { useGlobalState } from '../context/GlobalState';


export default function Home() {
    const { state, dispatch } = useGlobalState();

    useEffect(() => {
        /* On page load check if user token is in local storage, if so take the user to a dashboard, if not then show the default page */ 
    })

    return(
        <>
        <Hero />
        <Search />
        <Browse />
        <Footer />
        </>
    )
}