import Link from "next/link";
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import '../app/global.css';
import axios from 'axios';
import App from './App';
import About from './about';

export default function Home() {
    return <div>
      <App />
    </div>
  }