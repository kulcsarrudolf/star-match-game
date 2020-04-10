import React, { useState } from 'react';
import './App.css';
import utils from './utils/Utils'

const StarsDisplay = props => (
  <>
    {utils.range(1, props.count).map(starId =>
      <div key={starId} className="star" />
    )}
  </>
);

const PlayNumber = props => (
  <button className="number" 
  style={{backgroundColor: colors[props.status]}}
  onClick={() => console.log('Num', props.number)}>{props.number}</button>
);

function App() {
  const [stars, setStars] = useState(utils.random(1, 9));
  const [availableNums, setAvailableNums] = useState([1, 2, 3, 4, 5]);
  const [candidateNums, setCandidateNums] = useState([2, 3]);
  
  const candidatesAreWrong = utils.sum(candidateNums) > stars;

  const numberStatus = (number) => {
    if (!availableNums.includes(number)) {
      return 'used';
    }

    if (candidateNums.includes(number)){
      return candidatesAreWrong ? 'wrong':'candidate';
    }

    return 'available';
  };

  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          <StarsDisplay count={stars} />
        </div>
        <div className="right">
          {utils.range(1, 9).map(number =>
            <PlayNumber key={number}
              status={numberStatus(number)}
              number={number} />
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
