import React, { useState } from 'react';
import './App.css';

function App() {
  const [slideValue, setSlideValue] = useState(0)
  function handleSlide(e: React.FormEvent<HTMLInputElement>) {
    const value:number = parseInt(e.currentTarget.value);
    console.log(value);
    setSlideValue(value);
  }
  return (
    <div className="App">
      <input
        type="range"
        name=""
        id="slider"
        min="0"
        max="100"
        onChange={handleSlide}
        value={slideValue}
      />
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle className='chart' cx="50" cy="50" r="50"/>
      </svg>
    </div>
  );
}

export default App;
