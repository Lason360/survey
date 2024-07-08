import React, { useState } from 'react';
import './q_4.css';

function Questionnaire() {
  const questions = [
    {
      id: 1,
      text: "The user interface is intuitive and easy to navigate.",
      options: ["Strongly Agree", "Agree", "Disagree", "Strongly Disagree"],
      selectedOption: "",
    },
    {
      id: 2,
      text: "The website content is informative and relevant.",
      options: ["Strongly Agree", "Agree", "Disagree", "Strongly Disagree"],
      selectedOption: "",
    },
    {
      id: 3,
      text: "The overall design of the application is visually appealing.",
      options: ["Strongly Agree", "Agree", "Disagree", "Strongly Disagree"],
      selectedOption: "",
    },
  ];

  const [answers, setAnswers] = useState([]);

  const handleOptionChange = (questionId, option) => {
    const updatedQuestions = questions.map((q) => {
      if (q.id === questionId) {
        return { ...q, selectedOption: option };
      }
      return q;
    });
    setAnswers(updatedQuestions);
  };

  const submitAnswers = () => {
    console.log("Submitted answers:", answers);
    // Implement your submission logic here, e.g., send data to server
  };

  return (
    <div className="questionnaire-container">
      <h2>User Experience Survey</h2>
      {questions.map((question) => (
        <div className="question" key={question.id}>
          <h3>{question.text}</h3>
          <div className="options">
            {question.options.map((option, index) => (
              <div key={index} className="option">
                <input
                  type="checkbox"
                  id={`${question.id}-${index}`}
                  name={`${question.id}`}
                  value={option}
                  checked={question.selectedOption === option}
                  onChange={() => handleOptionChange(question.id, option)}
                />
                <label htmlFor={`${question.id}-${index}`}>{option}</label>
              </div>
            ))}
          </div>
        </div>
      ))}
      <button onClick={submitAnswers}>Submit Answers</button>
    </div>
  );
}

export default Questionnaire;
