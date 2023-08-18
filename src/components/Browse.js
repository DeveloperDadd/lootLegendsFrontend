import React from "react";
import Link from "next/link";
import { useGlobalState } from "../context/GlobalState";
import { useRouter } from "next/navigation";

const APIKEY = '752261bddc104be7860f16124d616255';
const url = `https://api.rawg.io/api/games?key=${APIKEY}&dates=2020-01-01,2023-08-17&ordering=-added`;

export default function Browse() {

    const axios = require('axios');

    async function getGames() {
        try {
            const response = await axios.get(url);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    getGames(url);
    
    
    return(
        <section className="browse">
            <div className="browseHead">
                <h2>Choose your adventure</h2>
                <input className="search" placeholder="Don't see your game? Try searching for it!"></input>
            </div>
        </section>
    )
}