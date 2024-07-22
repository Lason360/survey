import React, { useState } from 'react';
import './Q_temps_css/q_4.css';

function Questionnaire({ initialQuestions }) {

  const [questions, setQuestions] = useState(initialQuestions);

  const handleOptionChange = (questionId, option) => {
    const updatedQuestions = questions.map((q) => {
      if (q.id === questionId) {
        return { ...q, selectedOption: option };
      }
      return q;
    });
    setQuestions(updatedQuestions);
  };

  const submitAnswers = () => {
    
    const answers = {};
    questions.forEach (question =>{
      answers[question.text] = question.selectedOption;
    }
    )

    console.log("Submitted answers:", answers);
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
                  type="radio"
                  id={`${question.id}-${index}`}
                  name={`question-${question.id}`}
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
