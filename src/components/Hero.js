import React from "react";
import Link from "next/link";
import { useGlobalState } from "../context/GlobalState";
import { useRouter } from "next/navigation";
import HeroImg from './HeroImg';
import Register from '../pages/Register/Register'

export default function Hero() {
    return(
        <div className="Hero container-fluid">
            <div className="heroText">
                <h1 className="CTA">Unite<br /><br/>Conquer<br/><br/>Loot<br/></h1>
            </div>
            <div className="registerContainer">
                <Register />
            </div>
            <HeroImg />
        </div>
    )
}