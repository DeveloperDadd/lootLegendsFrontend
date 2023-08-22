import React from "react";
import Link from "next/link";
import { useGlobalState } from "../context/GlobalState";
import { useRouter } from "next/navigation";


export default function Button({onPageChange}) {
    const router = useRouter();
    
    const goAbout = (e) => {
        e.preventDefault();
        router.push('/about');
    }
    
    const goLogin = (e) => {
        e.preventDefault();
        router.push('/login');
    }

    const goHome = (e) => {
        e.preventDefault();
        router.push('/home');
    }

    const goDashboard = (e) => {
        e.preventDefault();
        router.push('/dashboard');
    }

    return(
        <nav>
            <button onClick={goAbout}>About Us</button>
            <button onClick={goLogin} >Login</button>
            <img onClick={goHome} className="icon" src="https://raw.githubusercontent.com/DeveloperDadd/lootLegendsFrontend/c7e657337c24258e72a3a3d3d5cd98e416f134de/src/images/house-solid.svg" />
            <img onClick={goDashboard} className="icon" src="https://raw.githubusercontent.com/DeveloperDadd/lootLegendsFrontend/c7e657337c24258e72a3a3d3d5cd98e416f134de/src/images/user-solid.svg" />
        </nav>
    )
}