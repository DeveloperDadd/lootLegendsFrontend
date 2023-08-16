import React from "react";
import Link from "next/link";
import { useGlobalState } from "../context/GlobalState";
import { useRouter } from "next/navigation";


export default function Footer() {
    return(
        <div className="footer">
            <div className="socials container-fluid">
                <h2>Follow us on social media!</h2>
                <ul>
                    <li><img className="icon" src="https://raw.githubusercontent.com/DeveloperDadd/lootLegendsFrontend/c7e657337c24258e72a3a3d3d5cd98e416f134de/src/images/github%20(1).svg" /></li>
                    <li><img className="icon" src="https://raw.githubusercontent.com/DeveloperDadd/lootLegendsFrontend/c7e657337c24258e72a3a3d3d5cd98e416f134de/src/images/instagram%20(2).svg" /></li>
                    <li><img className="icon" src="https://raw.githubusercontent.com/DeveloperDadd/lootLegendsFrontend/c7e657337c24258e72a3a3d3d5cd98e416f134de/src/images/square-x-twitter%20(1).svg" /></li>
                </ul>
            </div>
            <div className="container-fluid">
                <h2>Other Links</h2>
                <ul className="otherLinks">
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms of service</a></li>
                    <li><a href="#">Forgot Password</a></li>
                    <li><a href="#">About Us</a></li>
                </ul>
            </div>  
        </div>
    )
}