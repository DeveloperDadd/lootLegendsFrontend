import styles from '../styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { GlobalStateProvider } from '../context/GlobalState';
import Navbar from '../components/navbar';
import Home from './home';
import About from './about';
import Login from './login';
import Dashboard from './dashboard';
import Footer from '../components/Footer';

export default function MyApp({ Component, pageProps }) {
    const [currentPage, setCurrentPage] = useState('home');

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


  return (
    <GlobalStateProvider>
      <div className={styles.myGlobalStyles} >
        <div className='maxContainer'>
            <Navbar onPageChange={setCurrentPage} />

            {currentPage === 'home' && <Home />}
            {currentPage === 'about' && <About />}
            {currentPage === 'login' && <Login />}
            {currentPage === 'dashboard' && <Dashboard/>}
            
            <Footer />
        </div>
      </div>
    </GlobalStateProvider>
  );
}
