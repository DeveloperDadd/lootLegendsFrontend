import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import Hero from '../components/Hero';
import Search from '../components/Search';
import Footer from '../components/Footer';
import Browse from '../components/Browse';
import { useGlobalState } from '../context/GlobalState';
import jwtDecode from 'jwt-decode';


export default function Home() {
    const { state, dispatch } = useGlobalState();

    useEffect(() => {
      // Function to retrieve user data from local storage
      const getUserFromLocalStorage = () => {
        const userData = localStorage.getItem('user');
        if (userData) {
          const user = jwtDecode(userData);
          console.log('User data:', user); 
          dispatch({
              type: 'SET_USER',
              payload: user
          });
        }
      };
  
      getUserFromLocalStorage();
      
    }, []);

    return(
        <>
        <Hero />
        <Search />
        <Browse />
        </>
    )
}