import React, { useState } from 'react';
import './App.css';

function App() {
  const [smileys, setSmileys] = useState([
    { id: 1, emoji: '😊', count: 0 },
    { id: 2, emoji: '😄', count: 0 },
    { id: 3, emoji: '😍', count: 0 },
  ]);

  const [winner, setWinner] = useState(null);

  const handleVote = (id) => {
    const updatedSmileys = smileys.map(smiley => {
      if (smiley.id === id) {
        return { ...smiley, count: smiley.count + 1 };
      }
      return smiley;
    });
    setSmileys(updatedSmileys);
  };

  const handleShowResults = () => {
    let maxVotes = 0;
    let winningSmiley = null;
    smileys.forEach(smiley => {
      if (smiley.count > maxVotes) {
        maxVotes = smiley.count;
        winningSmiley = smiley;
      }
    });
    setWinner(winningSmiley);
  };

  return (
      <div className="app">
        <h1>Список смайликів</h1>
        <ul>
          {smileys.map(smiley => (
              <li key={smiley.id}>
                {smiley.emoji} - {smiley.count} кліків
                <button onClick={() => handleVote(smiley.id)}>Голосувати</button>
              </li>
          ))}
        </ul>
        <button onClick={handleShowResults}>Показати результати</button>
        {winner && (
            <div>
              <h2>Переможець:</h2>
              <p>{winner.emoji}</p>
            </div>
        )}
      </div>
  );
}
export default App;