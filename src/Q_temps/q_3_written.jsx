import React, { useState } from 'react';
import './q_3_written.css';

function WrittenQuestion({qa_JSON}) {

  const question = "This is a written question";
    
  const [writtenAnswer, setWrittenAnswer] = useState('');

  const handleWrittenChange = (e) => {
    setWrittenAnswer(e.target.value);
  };

  const submitAnswer = () => {
    const updatedJSON = {...qa_JSON};
    updatedJSON[question] = writtenAnswer;
    console.log(updatedJSON);
  };

  return (
    <div className="written-question-container">
      <h2>{question}</h2>
      <div id="written-answer">
        <textarea
          value={writtenAnswer}
          onChange={handleWrittenChange}
          placeholder="Type your answer here..."
        />
      </div>
      <button onClick={submitAnswer}>Submit Answer</button>
    </div>
  );
}

export default WrittenQuestion;
