import React, { useState } from 'react';
import './q_1_mcq.css';

function Q_mcq() {
  const question = {
    text: "What is the content on a MCQ question?",
    options: ["answer 1", "answer 2", "answer 3", "answer 4"],
  };

  const [selectedOption, setSelectedOption] = useState([]);
  const [result, setResult] = useState('');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const submitAnswer = () => {
  };

  return (
    <div className="mcq-container">
      <h2>{question.text}</h2>
      <div id="options">
        {question.options.map((option) => (
          <div className="option" key={option}>
            <input
              type="radio"
              id={option}
              name="option"
              value={option}
              checked={selectedOption === option}
              onChange={handleOptionChange}
            />
            <label htmlFor={option}>{option}</label>
          </div>
        ))}
      </div>
      <button onClick={submitAnswer}>Next Question</button>
      <p id="result">{result}</p>
    </div>
  );
}

export default Q_mcq;
