import React, { useState } from 'react';
import './q_1_mcq.css';

function Q_mcq() {
  const question = {
    text: "What is the content on a multiple answered question?",
    options: ["answer 1", "answer 2", "answer 3", "answer 4"],
  };

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChange = (e) => {
    const option = e.target.value;
    setSelectedOptions((prevSelectedOptions) => {
      if (prevSelectedOptions.includes(option)) {
        return prevSelectedOptions.filter((item) => item !== option);
      } else {
        return [...prevSelectedOptions, option];
      }
    });
  };

  const submitAnswer = () => {
    // Handle answer submission logic here
    console.log("Selected options:", selectedOptions);
  };

  return (
    <div className="mcq-container">
      <h2>{question.text}</h2>
      <div id="options">
        {question.options.map((option) => (
          <div className="option" key={option}>
            <input
              type="checkbox"
              id={option}
              value={option}
              checked={selectedOptions.includes(option)}
              onChange={handleOptionChange}
            />
            <label htmlFor={option}>{option}</label>
          </div>
        ))}
      </div>
      <button onClick={submitAnswer}>Next Question</button>
    </div>
  );
}

export default Q_mcq;
