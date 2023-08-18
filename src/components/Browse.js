import React from "react";
import { useState, useEffect } from 'react';
import Link from "next/link";
import { useGlobalState } from "../context/GlobalState";
import { useRouter } from "next/navigation";

const APIKEY = '752261bddc104be7860f16124d616255';
const url = `https://api.rawg.io/api/games?key=${APIKEY}&dates=2020-01-01,2023-08-17&ordering=-added`;

export default function Browse() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        const axios = require('axios');

        axios.get(url)
            .then(response => {
                setGames(response.data.results);
                console.log(response.data);
            })
            .catch(error => {
                console.log('Error fetching data:', error)
            });
    }, []);
    
    return(
        <section className="browse">
            <div className="browseHead">
                <h2>Choose your adventure</h2>
                <input className="search" placeholder="Don't see your game? Try searching for it!"></input>
            </div>
            <div className="gamesContainer container-fluid">
                {games.map(game => (
                    <div className="card col-3 m-1">
                        <div className="col">
                            <img className="card-img-top img-fluid" src={game.background_image} alt={game.name} />
                            <div className="card-body">
                                <h4 className="card-title text-center">{game.name}</h4>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Overall Rating: {game.rating}</li>
                                <li className="list-group-item">Release Date : {game.released}</li>
                                <li className="list-group-item"><a href="#">Add this game to your favorites!</a></li>
                            </ul>
                        </div>
                    </div>
                    
                ))}

            </div>
                
        </section>
    );
};