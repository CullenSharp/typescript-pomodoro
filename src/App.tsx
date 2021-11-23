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
      <svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">
        <path d="M 10 10 C 20 20, 40 20, 50 10" stroke="black" fill="transparent"/>
        <path d="M 70 10 C 70 20, 110 20, 110 10" stroke="black" fill="transparent"/>
        <path d="M 130 10 C 120 20, 180 20, 170 10" stroke="black" fill="transparent"/>
        <path d="M 10 60 C 20 80, 40 80, 50 60" stroke="black" fill="transparent"/>
        <path d="M 70 60 C 70 80, 110 80, 110 60" stroke="black" fill="transparent"/>
        <path d="M 130 60 C 120 80, 180 80, 170 60" stroke="black" fill="transparent"/>
        <path d="M 10 110 C 20 140, 40 140, 50 110" stroke="black" fill="transparent"/>
        <path d="M 70 110 C 70 140, 110 140, 110 110" stroke="black" fill="black"/>
        <path d="M 130 110 C 120 140, 180 140, 170 110" stroke="black" fill="transparent"/>
      </svg>
    </div>
  );
}

export default App;
