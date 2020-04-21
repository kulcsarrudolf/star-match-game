import React from "react";
import "./../Style/App.css";

import utils from "./../utils/Utils";
import useGameState from "./../utils/GameState";

import StarsDisplay from "./StarsDisplay";
import PlayNumber from "./PlayNumber";
import PlayAgain from "./PlayAgain";

const Game = (props) => {
    const {
        stars,
        availableNums,
        candidateNums,
        secondsLeft,
        setGameState,
    } = useGameState();

    const candidatesAreWrong = utils.sum(candidateNums) > stars;

    const gameIsWon = availableNums.length === 0;
    const gameIsLost = secondsLeft === 0;

    const gameStatus = gameIsWon ? "won" : gameIsLost ? "lost" : "active";

    const numberStatus = (number) => {
        if (!availableNums.includes(number)) {
            return "used";
        }
        if (candidateNums.includes(number)) {
            return candidatesAreWrong ? "wrong" : "candidate";
        }
        return "available";
    };

    const onNumberClick = (number, currentStatus) => {
        if (gameStatus !== "active" || currentStatus === "used") {
            return;
        }

        const newCandidateNums =
            currentStatus === "available"
                ? candidateNums.concat(number)
                : candidateNums.filter((cn) => cn !== number);

        setGameState(newCandidateNums);
    };

    return (
        <div className="game">
            <div className="help">
                Pick 1 or more numbers that sum to the number of stars
            </div>
            <div className="body">
                <div className="left">
                    {gameStatus !== "active" ? (
                        <PlayAgain
                            onClick={props.startNewGame}
                            gameStatus={gameStatus}
                        />
                    ) : (
                        <StarsDisplay count={stars} />
                    )}
                </div>
                <div className="right">
                    {utils.range(1, 9).map((number) => (
                        <PlayNumber
                            key={number}
                            status={numberStatus(number)}
                            number={number}
                            onClick={onNumberClick}
                        />
                    ))}
                </div>
            </div>
            <div className="timer">Time Remaining: {secondsLeft}</div>
        </div>
    );
};

export default Game;
