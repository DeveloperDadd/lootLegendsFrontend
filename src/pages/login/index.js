import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useGlobalState } from '../../context/GlobalState';
import authService from '../../services/auth.service';
import jwtDecode from 'jwt-decode';
import { useEffect } from 'react';

function Login() {
    const router = useRouter();
    const { state, dispatch } = useGlobalState();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    function handleLogin(e) {
        e.preventDefault();
        authService
            .login(email, password, username)
            .then(async (resp) => {
                console.log(resp)
                let data = jwtDecode(resp.access)
                await dispatch({
                    currentUserToken: resp.access,
                    currentUser: data
                })
                router.push('/dashboard')
            });
    }


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


    return (
        <div>
            <div className='flex m-5'>
                <form
                    onSubmit={handleLogin}
                    className='login col-6 container-fluid text-center rounded p-5 border-2 bg-mtgray'
                >
                    <div className='flex justify-between m-2 items-center space-x-2'>
                        <label htmlFor="username">Username:</label>
                        <input
                            className='border'
                            type="text"
                            id="username"
                            name="username"
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className='flex justify-between m-2 items-center space-x-2'>
                        <label htmlFor="email">Email:</label>
                        <input
                            className='border'
                            type="password"
                            id="email"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className='flex justify-between m-2 items-center space-x-2'>
                        <label htmlFor="pass">Password</label>
                        <input
                            className='border'
                            type="password"
                            id="pass"
                            name="password"
                            minLength="8"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className='flex'>
                        <input
                            className="signin-button bg-mtpurple text-white py-2 px-4 rounded-lg m-auto font-bold disabled:opacity-60"
                            type="submit"
                            value="Sign in"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login