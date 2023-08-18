import React from "react";
import Link from "next/link";
import { useGlobalState } from "../context/GlobalState";
import { useRouter } from "next/navigation";

export default function Button({onPageChange}) {
    return(
        <nav>
            <button onClick={() => onPageChange('about')}>About Us</button>
            <button onClick={() => onPageChange('login')}>Login</button>
            <img onClick={() => onPageChange('home')} className="icon" src="https://raw.githubusercontent.com/DeveloperDadd/lootLegendsFrontend/c7e657337c24258e72a3a3d3d5cd98e416f134de/src/images/house-solid.svg" />
            <img onClick={() => onPageChange('profile')} className="icon" src="https://raw.githubusercontent.com/DeveloperDadd/lootLegendsFrontend/c7e657337c24258e72a3a3d3d5cd98e416f134de/src/images/user-solid.svg" />
        </nav>
    )
}