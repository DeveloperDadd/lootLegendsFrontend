import Link from "next/link";
import Navbar from "../../components/navbar";
import Footer from '../../components/Footer'
import jwtDecode from "jwt-decode";
import { useGlobalState } from "../../context/GlobalState";
import { useEffect } from "react";

export default function Dashboard() {

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


  return <div>
          <h1>User Dashboard</h1>
          <h2>Welcome, </h2>
          <div className="container-fluid">
            <div className="row">
              <div class="col-4">
                <h2>Favorite Games</h2>
              </div>
              <div class="col-4">
                <h2>My pictures</h2>
              </div>
              <div class="col-4">
                <h2>My videos</h2>
              </div>
            </div>
          </div>
        </div>
  }