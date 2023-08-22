import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/global.css';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import { GlobalStateProvider } from '../context/GlobalState';
import Navbar from '../components/navbar';
import Home from './home';
import About from './about';
import Login from './login';
import Dashboard from './dashboard';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';

export default function MyApp({ Component, pageProps }) {
    const router = useRouter();
    const {pathname} = router;

    useEffect(() => {
        // Function to retrieve user data from local storage
        const getUserFromLocalStorage = () => {
          const userData = localStorage.getItem('user');
          if (userData) {
            const user = JSON.parse(userData);
            console.log('User data:', user); 
          }
        };
    
        getUserFromLocalStorage();
    
        
      }, []);

      let content;

      if (pathname === '/home') {
        content = <Home />;
      } else if (pathname === '/about') {
        content = <About />;
      } else if (pathname === '/login') {
        content = <Login />;
      } else if (pathname === '/dashboard') {
        content = <Dashboard />;
      }


  return (
    <GlobalStateProvider>
      <div className={styles.myGlobalStyles} >
        <div className='maxContainer'>
            <Navbar />
            {content}
            <Footer />
        </div>
      </div>
    </GlobalStateProvider>
  );
}
