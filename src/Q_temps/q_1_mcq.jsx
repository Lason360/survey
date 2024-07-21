import React, { useState } from 'react';
import './Q_temps_css/q_1_mcq.css';

function Q_mcq({qa_JSON}) {
  const question = {
    text: "What is the content on a MCQ question?",
    options: ["answer 1", "answer 2", "answer 3", "answer 4"],
  };

  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const submitAnswer = () => {
  
    if (!selectedOption) {

      alert('Select one answer');
      return;

    }
  
    const updatedJson = { ...qa_JSON };
    updatedJson[question.text] = selectedOption;
  
    console.log("Updated JSON:", JSON.stringify(updatedJson));
    // Implement firebase logic here
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
    </div>
  );
}

export default Q_mcq;
