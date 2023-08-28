import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useGlobalState } from '../../context/GlobalState'

export default function GamePage() {
    const router = useRouter();
    const {state, dispatch} = useGlobalState();
    const gameDataJson = router.query.slug;

    const gameData = router.query.state?.gameData
    ? JSON.parse(router.query.state.gameData)
    : null;

    console.log(gameData);
    return (
        <div>
          {gameData ? (
            <div>
              <h1>{gameData.name}</h1>
              <img src={gameData.background_image} alt={gameData.name} />
              {/* Display other game information */}
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      );
};