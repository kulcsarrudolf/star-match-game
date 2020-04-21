import React, { useState } from "react";
import "./Style/App.css";

import Game from "./Components/Game";

const StartMatch = () => {
    const [gameId, setGameId] = useState(1);

    return <Game key={gameId} startNewGame={() => setGameId(gameId + 1)} />;
};

export default StartMatch;
