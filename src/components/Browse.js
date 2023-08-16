import React from "react";
import Link from "next/link";
import { useGlobalState } from "../context/GlobalState";
import { useRouter } from "next/navigation";

export default function Browse() {
    return(
        <>
            <div className="browseHead">
                <h2>Choose your adventure</h2>
                <input className="search" placeholder="Don't see your game? Try searching for it!"></input>
            </div>
        </>
    )
}