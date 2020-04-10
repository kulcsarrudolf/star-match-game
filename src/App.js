import React, { useState } from 'react';
import './App.css';
import utils from './utils/Utils'

const PlayNumber = props => (
  <button className="number" onClick={() => console.log('Num', props.number)}>{props.number}</button>
);

function App() {
  // const stars = utils.random(1,9);
  const [stars, setStars] = useState(utils.random(1, 9));
  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          {utils.range(1, stars).map(starId =>
            <div key={starId} className="star" />
          )}
        </div>
        <div className="right">
          {utils.range(1, 9).map(number =>
            <PlayNumber key={number} number={number} />
          )}
        </div>
      </div>
      <div className="timer">Time Remaining: 10</div>
    </div>
  );
}

// Color Theme
const colors = {
  available: 'lightgray',
  used: 'lightgreen',
  wrong: 'lightcoral',
  candidate: 'deepskyblue',
};



export default App;
