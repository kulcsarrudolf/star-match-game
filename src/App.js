import React, { useState, useEffect } from "react";
import "./App.css";
import utils from "./utils/Utils";

// Color Theme
const colors = {
    available: "lightgray",
    used: "lightgreen",
    wrong: "lightcoral",
    candidate: "deepskyblue",
};

const StarsDisplay = (props) => (
    <>
        {utils.range(1, props.count).map((starId) => (
            <div key={starId} className="star" />
        ))}
    </>
);

const PlayNumber = (props) => (
    <button
        className="number"
        style={{ backgroundColor: colors[props.status] }}
        onClick={() => props.onClick(props.number, props.status)}
    >
        {props.number}
    </button>
);

const PlayAgain = (props) => (
    <div className="game-done">
        <div
            className="message"
            style={{ color: props.gameStatus === "lost" ? "red" : "green" }}
        >
            {props.gameStatus === "lost" ? "Game Over" : "Nice"}
        </div>
        <button onClick={props.onClick}>Play Again</button>
    </div>
);

const Game = (props) => {
    const [stars, setStars] = useState(utils.random(1, 9));
    const [availableNums, setAvailableNums] = useState(utils.range(1, 9));
    const [candidateNums, setCandidateNums] = useState([]);
    const [secondsLeft, setSecondsLeft] = useState(10);

    useEffect(() => {
        if (secondsLeft > 0 && availableNums.length > 0) {
            const timerId = setTimeout(() => {
                setSecondsLeft(secondsLeft - 1);
            }, 1000);

            return () => clearTimeout(timerId);
        }
    });

    const candidatesAreWrong = utils.sum(candidateNums) > stars;

    const gameIsWon = availableNums.length === 0;
    const gameIsLost = secondsLeft === 0;

    const gameStatus = gameIsWon ? "won" : gameIsLost ? "lost" : "active";

    /*
    This solution removed -> to avoid unexpected side effects
    const resetGame = () => {
        setStars(utils.random(1, 9));
        setAvailableNums(utils.range(1, 9));
        setCandidateNums([]);
        setSecondsLeft(10);
    };
    */

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

        if (utils.sum(newCandidateNums) !== stars) {
            setCandidateNums(newCandidateNums);
        } else {
            const newAvailableNums = availableNums.filter(
                (n) => !newCandidateNums.includes(n)
            );
            setStars(utils.randomSumIn(newAvailableNums, 9));
            setAvailableNums(newAvailableNums);
            setCandidateNums([]);
        }
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

const StartMatch = () => {
    const [gameId, setGameId] = useState(1);

    return <Game key={gameId} startNewGame={() => setGameId(gameId + 1)} />;
};

export default StartMatch;
