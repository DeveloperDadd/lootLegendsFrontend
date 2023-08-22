import styles from '../styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalStateProvider } from '../context/GlobalState';


function MyApp({ Component, pageProps }) {
  return (
    <GlobalStateProvider>
      <div className={styles.myGlobalStyles}><Component {...pageProps} /></div>
    </GlobalStateProvider>
  );
}
export default MyApp;