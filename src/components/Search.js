import React from "react";
import { useState, useEffect } from 'react';
import Link from "next/link";
import { useGlobalState } from "../context/GlobalState";
import { useRouter } from "next/navigation";
import authHeader from '../services/auth.headers';
import axios from 'axios'


const APIKEY = '752261bddc104be7860f16124d616255';

export default function Search() {
    const { state, dispatch } = useGlobalState()
    const [userInput, setUserInput] = useState("");
    const [gameData, setGameData] = useState([]);
    const [slug, setSlug] = useState("");
    const router = useRouter();

    const handleInputChange = (e) => {
        setUserInput(e.target.value);
    };

    // This function displays the 3 most related game titles in the search area
    const handleSearch = async (e) => {
        const axios = require('axios');
        let slug = userInput.split(' ').join('-').toLowerCase();
        setSlug(slug);
        if (e.key === 'Enter') {
            await axios.get(`https://api.rawg.io/api/games?key=${APIKEY}&search=${slug}&page_size=3`)
                .then(response => {
                    setGameData(response.data.results);
                    console.log(response.data);
                })
                .catch(error => {
                    console.log(error.response.data);
                });
            setUserInput("");
        }
    }



    /* This functions takes certain game data and sends it to the backend as a user favorite game to be called back in the future and tied to that particular user in future login sessions */

    const addFavorites = async (id) => {
        const axios = require('axios');
        const user_id = state.user.user_id;
        const single_game = gameData.filter((item) => item.id == id);
        console.log(single_game);
        const gameInfo = {
            game_title: single_game[0].name,
            rawg_id: single_game[0].id,
            game_image_url: single_game[0].background_image,
            genre: single_game[0].genres[0]
        };
        gameInfo.user_id = user_id;
        console.log(gameInfo);
        const header = authHeader();
        axios.post('http://127.0.0.1:8000/api/add-to-favorites/', gameInfo, header)
            .then(response => {
                console.log('Successfully added to favorite games', response.data);
            })
            .catch(error => {
                console.error('Error posting data:', error.response)
            })
    }

    if (gameData.length === 0) {
        return (
            <div id="search">
                <h2>Choose your adventure</h2>
                <input className="search text-center" placeholder="Search for a game..." value={userInput} onChange={handleInputChange} onKeyDown={handleSearch} type="text"></input>
            </div>
        );
    } else {
        return (
            <div>
                <div id="search">
                    <h2>Share the Loot!</h2>
                    <input className="search text-center" placeholder="Search for a game..." value={userInput} onChange={handleInputChange} onKeyDown={handleSearch} type="text"></input>
                </div>
                <div className="gamesContainer container-fluid">
                    {gameData.map(game => (
                        <div className="card col-3 m-1 border rounded" key={game.id}>
                            <div className="col">

                                <Link href={`..pages/[slug]/page`} as={`../pages/${slug}/page`} passHref style={{ textDecoration: 'none' }}>
                                    <img className="card-img-top img-fluid" src={game.background_image} alt={game.name} onClick={() =>
                                        router.push(
                                            {
                                                pathname: `/pages/[slug]/page`,
                                                query: { slug: game.slug},
                                            },
                                            undefined, // Remove unnecessary parameters
                                            { shallow: false, state: { gameData: JSON.stringify(game) } }
                                        )
                                    }
                                    />
                                    <div className="card-body">
                                        <h4 className="card-title text-center">{game.name}</h4>
                                    </div>
                                </Link>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Overall Rating: {game.rating}</li>
                                    <li className="list-group-item">Release Date: {game.released}</li>
                                    <li className="list-group-item"><button onClick={(e) => addFavorites(game.id)}>Add this game to your favorites!</button></li>
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}




