import Link from "next/link";
import React from 'react';
import ReactDOM from 'react-dom/client';
import MyApp from "./_app";
import jwtDecode from "jwt-decode";
import { useGlobalState } from "../context/GlobalState";
import { useEffect } from "react";

export default function Index() {

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
      <MyApp />
    </div>
  }