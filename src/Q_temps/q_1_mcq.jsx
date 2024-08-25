import React, { useState } from 'react';
import './Q_temps_css/q_1_mcq.css';

function Qmcq({qa_JSON}) {
  const question = qa_JSON["question"]
  const options = qa_JSON["options"]

  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const submitAnswer = () => {
  
    if (!selectedOption) {

      alert('Select one answer');
      return;

    }
  
    const updatedJson = {};
    updatedJson["answer"] = selectedOption;
  
    console.log("Updated JSON:", JSON.stringify(updatedJson));
    // Implement firebase logic here
  };

  return (
    <div className="mcq-container">
      <h2>{question}</h2>
      <div id="options">
        {options.map((option) => (
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

export default Qmcq;
