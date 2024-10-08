import React, { useState } from 'react';
import './Q_temps_css/q_1_mcq.css';

function Qmulti({qa_JSON}) {
  // const question = {
  //   text: "What is the content on a multiple answered question?",
  //   options: ["answer 1", "answer 2", "answer 3", "answer 4"],
  // };

  const question = qa_JSON["question"]
  const options = qa_JSON["options"]

  const initialAnswerJson = {};
  options.forEach(option => {
    initialAnswerJson[option] = false;
  });

  const [answerJson, setAnswerJson] = useState(initialAnswerJson);

  const handleOptionChange = (e) => {
    const option = e.target.value;
    setAnswerJson(prevAnswerJson => ({
      ...prevAnswerJson,
      [option]: !prevAnswerJson[option]
    }))
  };

  const submitAnswer = () => {
    const selectedOptions = Object.values(answerJson).filter(val => val).length;
    if (selectedOptions === 0) {
      alert('Select at least one answer');
      return;
    }

    const updatedJson = { ...answerJson };

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
              type="checkbox"
              id={option}
              value={option}
              checked={answerJson[option]}
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

export default Qmulti;
