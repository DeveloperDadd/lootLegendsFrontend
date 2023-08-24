import React from "react";
import { useState, useEffect } from 'react';
import { useGlobalState } from "../context/GlobalState";
const APIKEY = '752261bddc104be7860f16124d616255';
const url = `https://api.rawg.io/api/games?key=${APIKEY}&dates=2020-01-01,2023-08-17&ordering=-added&page_size=9`;

export default function Browse() {
    const [games, setGames] = useState([]);
    const {state, dispatch } = useGlobalState();
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


    const addFavorites = async (e) => {
        const axios = require('axios');
        const user_id = state.user.user_id;
        const gameInfo = {
            game_title: games.name,
            user_id: user_id,
            rawg_id: games.id,
            game_image: games.background_image,
            game_rating: games.rating,
            game_description: games.description,
        };
        axios.post('http://127.0.0.1/8000/api/add-to-favorites/', gameInfo)
        .then(response => {
            console.log('Successfully added to favorite games', response.data);
        })
        .catch(error => {
            console.error('Error posting data:', error)
        }) 
    }

    return (
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
                            <li className="list-group-item"><button onClick={addFavorites}>Add this game to your favorites!</button></li>
                            </ul>
                        </div>
                    </div> 
                ))}
        </div>
)}