import React, { useEffect, useState } from "react";
import AuthService from '../services/auth.service';
import { useRouter } from "next/navigation";
import { useGlobalState } from '../context/GlobalState';

export default function Register() {
  const {state, dispatch} = useGlobalState();
  const router = useRouter();
  const [user, setUser] = useState({
    password: "",
    passwordConf: "",
    firstName: "",
    lastName: "",
    email: "",
    username: "",
  });

  const handleChange = (key, value) => {
    console.log(value);
    setUser({
      ...user,
      [key]: value,
    });
  };

  async function handleRegister(e) {
    console.log(e);
    e.preventDefault();
    user.username=user.email;
    AuthService.register(user);
    dispatch({
      currentUserToken: state.currentUserToken,
      currentUser: state.currentUser?.user_id,
    });
    router.push("/dashboard");
  }

  return (
    <div className="w-screen h-screen">
      <div className="flex">
        <form className="mx-auto border-2 bg-mtgray" onSubmit={handleRegister}>
        <h2 className="formHeader">Make an account!</h2>
          <div className="inputContainer flex space-between m-3 space-x-2">
            <label htmlFor="firstName">First Name:</label>
              <input
                className="border"
                type="text"
                id="firstName"
                required
                onChange={(e) => handleChange("firstName", e.target.value)}
              />
          </div>
          <div className="inputContainer flex space-between m-3 space-x-2">
            <label htmlFor="lastName">Last Name:</label>
            <input
              className="border"
              type="text"
              id="lastName"
              required
              onChange={(e) => handleChange("lastName", e.target.value)}
            />
          </div>
          <div className="inputContainer flex space-between m-3 space-x-2">
            <label htmlFor="email">Email:</label>
            <input
              className="border"
              type="text"
              id="email"
              required
              onChange={(e) => handleChange("email", e.target.value)}
            />
          </div>
          <div className="inputContainer flex space-between m-3 space-x-2">
            <label htmlFor="password">Password:</label>
            <input
              className="border"
              type="password"
              id="password"
              required
              onChange={(e) => handleChange("password", e.target.value)}
            />
          </div>
          <div className="inputContainer flex space-between m-3 space-x-2">
            <label htmlFor="passwordConf">Confirm Password:</label>
            <input
              className="border"
              type="password"
              id="passwordConf"
              required
              onChange={(e) => handleChange("passwordConf", e.target.value)}
            />
          </div>
          <div className="flex">
            <input
              type="submit"
              value="Register!"
              className="registerButton bg-mtpurple text-white py-2 px-4 rounded-lg mx-auto my-2 font-bold disabled:opacity-60"
              disabled={
                user.password &&
                user.password.length >= 8 &&
                user.password === user.passwordConf &&
                user.firstName &&
                user.lastName &&
                user.email
                  ? false
                  : true
              }
            />
          </div>
        </form>
      </div>
    </div>
  );
}

