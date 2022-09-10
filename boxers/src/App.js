import React, { useState } from 'react'
import './App.css';

function App() {
  const [callCount, setCallCount] = useState(0)

  const handleClick = () => {
    console.log('button clicked')
    setCallCount(callCount + 1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={handleClick} >calls: {callCount}</button>
        <label htmlFor="boxer-select">Choose a boxer:</label>

        <select name="boxers" id="boxer-select">
          <option value="">--Please choose an option--</option>
          <option value="tyson">Mike Tyson</option>
          <option value="lewis">Lennox Lewis</option>
          <option value="frasier">Joe Frasier</option>
          <option value="ali">Muhammed Ali</option>
        </select>

      </header>
    </div>
  );
}

export default App;
