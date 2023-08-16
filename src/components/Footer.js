import React from "react";
import Link from "next/link";
import { useGlobalState } from "../context/GlobalState";
import { useRouter } from "next/navigation";


export default function Footer() {
    return(
        <div className="footer">
            <div className="socials">
                <h2>Follow us on social media!</h2>
                
            </div>  
        </div>
    )
}