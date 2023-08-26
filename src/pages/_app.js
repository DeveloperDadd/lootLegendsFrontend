import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/global.css';
import { GlobalStateProvider, useGlobalState } from '../context/GlobalState';
import Navbar from '../components/navbar';
import Home from './Home';
import About from './about';
import Login from './login';
import Dashboard from './dashboard';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';


export default function MyApp({ Component, pageProps }) {
    const router = useRouter();
    const {pathname} = router;

      let content;

      if (pathname === '/') {
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
