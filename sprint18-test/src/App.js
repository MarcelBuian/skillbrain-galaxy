import { useState } from 'react';
import Counter from './Counter';

export default function App() {
  const [showB, setShowB] = useState(true);
  const [scoresList, setScoresList] = useState([1, 2]);

  const incrementScore = (scoreIndex) => {

    const newScoresList = scoresList.map( (value, index) => {
      if (scoreIndex === index) {
        return value+1; 
      } else {
        return value;
      }
    });

    setScoresList(newScoresList);
  }
  
  return (
    <div>
      <Counter
        onScoreClick={() => incrementScore(0)}
        score={scoresList[0]}
      />
      {showB &&
        <Counter 
          onScoreClick={() => incrementScore(1)}
          score={scoresList[1]}
        />
      } 
      <label>
        <input
          type="checkbox"
          checked={showB}
          onChange={e => {
            setShowB(e.target.checked)
          }}
        />
        Render the second counter
      </label>
    </div>
  );
}